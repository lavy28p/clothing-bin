

const ProductCard = (props) => {
    return (
        <div className="product-card">
          <img className="product-card-image" src={props.imageURL} alt={props.name} />  
        </div>
    )
}

export default ProductCard