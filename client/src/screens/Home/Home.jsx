
import ProductCards from "../../components/ProductCards/ProductCards";
import Layout from "../../components/Layout/Layout";
import { Link } from "react-router-dom";

function Home() {

  return (
    <div className="home">
      <h1>Home Page</h1>
      <Layout>
      <div className="home-layout">
        <ProductCards />      
      </div>
      <button className="shop-button-container">
        <Link className="shop-button" to={`/products`}>
          SHOP NOW
        </Link>
      </button>
    </Layout>
    </div>
  )
}

export default Home;