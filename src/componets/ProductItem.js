import { Link } from 'react-router-dom';

export default function ProductItem({ product, search }) {
  return (
    <li className="product-item">
      <div>
        
        <h2>{product.name}</h2>
        <p>Danh mục: {product.category}</p>
        <p>Giá: <strong>{product.price.toLocaleString('vi-VN')} VND</strong></p>
      </div>
      
      <Link className="button" to={`/products/${product.id}${search}`}>View Details</Link>
    </li>
  );
}
