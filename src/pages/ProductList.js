
import { useMemo } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { products } from '../data/products';
import SearchBar from '../componets/SearchBar';
import CategoryFilter from '../componets/CategoryFilter';
import ProductItem from '../componets/ProductItem';
import Pagination from '../componets/Pagination';


const PAGE_SIZE = 3;


const categories = [...new Set(products.map(product => product.category))];

export default function ProductList() {
 
  const [searchParams, setSearchParams] = useSearchParams();
 
  const { search } = useLocation();

  
  const keywords = searchParams.get('keywords') || '';
  const category = searchParams.get('category') || '';
  const sortValue = searchParams.get('sort');
  
  const sort = ['price-asc', 'price-desc'].includes(sortValue) ? sortValue : 'none';
  const requestedPage = Number(searchParams.get('page'));
  
  const page = Number.isFinite(requestedPage) ? Math.max(1, Math.floor(requestedPage)) : 1;

  
  const sortedProducts = useMemo(() => {
    
    let result = products.filter(product =>
      product.name.toLowerCase().includes(keywords.trim().toLowerCase())
    );

    if (category !== '') {
      result = result.filter(product => product.category === category);
    }
  
    result = [...result];
    if (sort === 'price-asc') result.sort((a, b) => a.price - b.price);
    if (sort === 'price-desc') result.sort((a, b) => b.price - a.price);
    return result;
  }, [keywords, category, sort]);

  
  const totalPages = Math.ceil(sortedProducts.length / PAGE_SIZE);
 
  const currentPage = Math.min(page, totalPages || 1);
  const startIndex = (currentPage - 1) * PAGE_SIZE;
  
  const displayProducts = sortedProducts.slice(startIndex, startIndex + PAGE_SIZE);

 
  function updateParams(changes, replace = false) {
    const next = new URLSearchParams(searchParams);
    Object.entries(changes).forEach(([key, value]) => {
      if (value === '' || value === null || value === 'none') next.delete(key);
      else next.set(key, String(value));
    });
    setSearchParams(next, { replace });
  }

  return (
    <section>
      <h1>Product List</h1>
      <div className="controls">
       
        <SearchBar value={keywords}
          onChange={value => updateParams({ keywords: value, page: 1 }, true)} />
        
        <CategoryFilter categories={categories} value={category}
          onChange={value => updateParams({ category: value, page: 1 })} />
        
        <label htmlFor="sort">Sắp xếp giá
          <select id="sort" value={sort} onChange={event => updateParams({ sort: event.target.value, page: 1 })}>
            <option value="none">Mặc định</option>
            <option value="price-asc">Giá tăng dần</option>
            <option value="price-desc">Giá giảm dần</option>
          </select>
        </label>
      </div>

      
      <p>Tổng sản phẩm: {sortedProducts.length}</p>
     
      {displayProducts.length === 0 ? <p>Không tìm thấy sản phẩm</p> : (
        <table className="product-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Tên sản phẩm</th>
              <th>Danh mục</th>
              <th>Giá</th>
              <th>Thao tác</th>
            </tr>
          </thead>
          <tbody>
            {displayProducts.map(product => <ProductItem key={product.id} product={product} search={search} />)}
          </tbody>
        </table>
      )}
      
            <Pagination currentPage={currentPage} totalPages={totalPages}
        onPageChange={value => updateParams({ page: value })} />
    </section>
  );
}