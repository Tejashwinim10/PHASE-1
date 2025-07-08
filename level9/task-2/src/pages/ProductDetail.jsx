import { useParams } from 'react-router-dom';
import { products } from '../data/products';
import './ProductDetail.css';

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === id);

  if (!product) return <h2>Product not found</h2>;

  return (
    <div className="product-detail">
      <h2>{product.name}</h2>
      <p><strong>Price:</strong> {product.price}</p>
      <p>{product.description}</p>
    </div>
  );
};

export default ProductDetail;
