import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <section>
      <h1><center>404 - Không tìm thấy trang</center></h1>
      <p><center>Trang của bạn đang tìm kiếm không tồn tại.</center></p>
      <div><center><Link className="button" to="/">Về trang chủ </Link></center></div>
    </section>
  );
}
