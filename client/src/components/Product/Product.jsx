import { Link } from 'react-router-dom';
import './Product.css';

const Product = (props) => {
    return (
        <div className="product-container">
            <Link className="product" to={`/products/${props._id}`}>
              <img className="product-image" src={props.imageURL} alt={props.name} />            
            </Link>
            <div className="product-name">{props.name}</div>
            <div className="product-price">{props.price}</div>
        </div>
    )
}
export default Product