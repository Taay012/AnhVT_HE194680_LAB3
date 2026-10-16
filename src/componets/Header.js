import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <header className="header">
      {/* TODO ĐỔI: tên ứng dụng theo đề. */}
      <strong>Product Management</strong>
      <nav aria-label="Main navigation">
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/products">Products</NavLink>
      </nav>
    </header>
  );
}
