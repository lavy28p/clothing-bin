import { useState, useEffect } from "react";
import { getProducts } from "../../services/products";
import Layout from "../../components/Layout/Layout";
import Product from "../../components/Product/Product";

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
    <Product _id={product._id} name={product.name} imageURL={product.imageURL} key={product._id}/>
  )
  
  return (
    <Layout>
      <h1>Products Page</h1>
      <div className="products">
        {PRODUCTS}
      </div>
    </Layout>
  )
}

export default Products;