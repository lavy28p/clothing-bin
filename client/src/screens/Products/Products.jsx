import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getProducts } from "../../services/products";
import Layout from "../../components/Layout/Layout";
import Product from "../../components/Product/Product";
import './Products.css';

const Products = (props) => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const fetchProducts = async () => {
      const allProducts = await getProducts();
      setProducts(allProducts);
    }
    fetchProducts();
  },[])

  const PRODUCTS = products.map((product) => 
    <Product _id={product._id} name={product.name} price={product.price} imageURL={product.imageURL} key={product._id}/>
  )
  
  return (
    <Layout user={props.user}>
      <h3>Bodycon Dresses</h3>
      <div className="add-container">  
          <Link className="add-link" to={`/add-product`}>
            Add More
          </Link>
        </div>
      <div className="products-container">
        {PRODUCTS}
      </div>
    </Layout>
  )
}

export default Products;