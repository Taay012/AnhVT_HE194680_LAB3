
import { Link } from 'react-router-dom';

export default function ProductItem({ product, search }) {
  return (
    <tr>
      <td>{product.id}</td>
      <td>{product.name}</td>
      <td>{product.category}</td>
      <td>{product.price.toLocaleString('vi-VN')} VND</td>
      <td>
        <Link className="button" to={`/products/${product.id}${search}`}>View Details</Link>
      </td>
    </tr>
  );
}