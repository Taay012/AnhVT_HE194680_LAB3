import { Link, useLocation, useParams } from 'react-router-dom';
import { products } from '../data/products';

export default function ProductDetail() {
  const { id } = useParams();
  const { search } = useLocation();
  
  const product = products.find(item => String(item.id) === id);

  return (
    <section>
      <Link to={`/products${search}`}>Back to products</Link>
      {!product ? <h1>Không tìm thấy sản phẩm</h1> : (
        <article className="product-detail">
          
          <h1>{product.name}</h1>
          <p>ID: {product.id}</p>
          <p>Danh mục: {product.category}</p>
          <p>Giá: {product.price.toLocaleString('vi-VN')} VND</p>
          <p>Mô tả: {product.description}</p>
        </article>
      )}
    </section>
  );
}
