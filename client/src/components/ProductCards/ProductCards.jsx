import { useState, useEffect } from 'react'
import { getProducts } from "../../services/products"
import ProductCard from '../ProductCard/ProductCard'
import './ProductCards.css'

function ProductCards() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const allProducts = await getProducts();
      setProducts(allProducts);
    }
    fetchProducts();
  },[])
  
  const CARDS = products.map((product, index) => index < 3
  ? (
    <ProductCard _id={product._id} name={product.name} imageURL={product.imageURL} key={product._id}/>
    )
  : null
  )

  return(
    <div className="cards-layout">
      {CARDS}
    </div>
  )
}

export default ProductCards;