import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <header className="header">
      <strong>ProductStore</strong>
      <nav aria-label="Main navigation">
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/products">Products</NavLink>
      </nav>
    </header>
  );
}