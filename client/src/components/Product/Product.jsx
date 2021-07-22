import { Link } from 'react-router-dom'

const Product = (props) => {
    return (
        <>
            <Link className="product" to={`/products/${props._id}`}>
              <img className="product-image" src={props.imageURL} alt={props.name} /> 
            </Link>
        </>
    )
}
export default Product