import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getProducts } from "../../services/products";
import Layout from "../../components/Layout/Layout";
import Product from "../../components/Product/Product";
import "./Products.css";

const Products = (props) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const allProducts = await getProducts();
      setProducts(allProducts);
    };
    fetchProducts();
  }, []);

  const PRODUCTS = products.map((product) => (
    <Product
      _id={product._id}
      name={product.name}
      price={product.price}
      imageURL={product.imageURL}
      key={product._id}
    />
  ));

  return (
    <Layout user={props.user}>
      <div className="products-link-layout">
        <div className="products-name">Dresses</div>
        <div className="add-link-container">
          <Link className="add-link" to={`/add-product`}>
            Sell your design here!
          </Link>
        </div>
      </div>
      <div className="products-container">{PRODUCTS}</div>
    </Layout>
  );
};

export default Products;
