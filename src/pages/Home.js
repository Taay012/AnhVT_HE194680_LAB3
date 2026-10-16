import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <section>
      <h1><center>Welcom to ProductStore</center></h1>
      <p><center>Manage and explore products for your needs.</center></p>
      <div><center><Link className="button" to="/products">View Products</Link></center></div>
    </section>
  );
}
