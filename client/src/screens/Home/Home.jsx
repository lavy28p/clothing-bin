
import ProductCards from "../../components/ProductCards/ProductCards";
import Layout from "../../components/Layout/Layout";
import { Link } from "react-router-dom";
import './Home.css'

function Home(props) {

  return (
    <div className="home-layout">
      <Layout user={props.user}>
      <div className="home-container">
        <h3 className="home-text">Trending right now</h3>
        <div className="home-products">
          <ProductCards />      
        </div>
        <button className="shop-button-container">
            <Link className="shop-button-link" to={`/products`}>
              Shop now
            </Link>
        </button>
      </div>
    </Layout>
    </div>
  )
}

export default Home;