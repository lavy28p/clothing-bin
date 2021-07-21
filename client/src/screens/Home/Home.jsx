
import ProductCards from "../../components/ProductCards/ProductCards"
import Layout from "../../components/Layout/Layout";

function Home() {

  return (
    <div className="home">
      <Layout>
      <div className="home-layout">
        <ProductCards />      
      </div>
      <button className="shop-button">SHOP NOW</button>
    </Layout>
    </div>
  )
}

export default Home;