import { fireEvent, render, screen, within } from '@testing-library/react';
import App from './App';

function open(path) {
  window.history.replaceState({}, '', path);
  return render(<App />);
}

test('URL sorting is applied before pagination and survives returning from detail', () => {
  open('/products?category=Laptop&sort=price-asc&page=2');
  expect(screen.getByRole('heading', { name: 'Dell XPS 13' })).toBeInTheDocument();
  expect(screen.queryByRole('heading', { name: 'MacBook Air M4' })).not.toBeInTheDocument();
  fireEvent.click(screen.getByRole('link', { name: 'View Details' }));
  expect(screen.getByText('ID: 4')).toBeInTheDocument();
  fireEvent.click(screen.getByRole('link', { name: 'Back to products' }));
  expect(window.location.search).toBe('?category=Laptop&sort=price-asc&page=2');
  expect(screen.getByRole('heading', { name: 'Dell XPS 13' })).toBeInTheDocument();
});

test('changing search resets the last page and combines with category', () => {
  open('/products?page=5');
  fireEvent.change(screen.getByLabelText('Tìm kiếm'), { target: { value: ' SAMSUNG ' } });
  expect(new URLSearchParams(window.location.search).get('page')).toBe('1');
  expect(screen.getByText('Tổng sản phẩm: 2')).toBeInTheDocument();
  fireEvent.change(screen.getByLabelText('Danh mục'), { target: { value: 'Laptop' } });
  expect(screen.getByText('Không tìm thấy sản phẩm')).toBeInTheDocument();
  expect(screen.queryByRole('navigation', { name: 'Pagination' })).not.toBeInTheDocument();
});

test('invalid page is clamped and unknown product is handled', () => {
  const view = open('/products?page=999');
  expect(within(screen.getByRole('navigation', { name: 'Pagination' })).getByRole('button', { name: '5', exact: true })).toBeDisabled();
  expect(new URLSearchParams(window.location.search).get('page')).toBe('5');
  view.unmount();
  open('/products/999');
  expect(screen.getByRole('heading', { name: 'Không tìm thấy sản phẩm' })).toBeInTheDocument();
});
