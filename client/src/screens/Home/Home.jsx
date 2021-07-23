
import ProductCards from "../../components/ProductCards/ProductCards";
import Layout from "../../components/Layout/Layout";
import { Link } from "react-router-dom";
import './Home.css'

function Home(props) {

  return (
    <div className="home-container">
      <Layout user={props.user}>
      <div className="home-layout">
        <ProductCards />      
      </div>
      <button className="shop-button-container">
        <Link className="shop-button-link" to={`/products`}>
          Shop now
        </Link>
      </button>
    </Layout>
    </div>
  )
}

export default Home;