import { Link } from 'react-router-dom';
import { products } from '../data/products';
import './ProductList.css';

const ProductList = () => {
  return (
    <div>
      <h2>Product List</h2>
      <ul className="product-list">
        {products.map(product => (
          <li key={product.id} className="product-item">
            <Link to={`/products/${product.id}`} className="product-link">
              {product.name} - {product.price}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
