import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { getProduct } from "../../services/products";
import Layout from "../../components/Layout/Layout";

const DetailProduct = (props) => {
  const [productDetail, setProductDetail] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      const product = await getProduct(id)
      setProductDetail(product)
      setLoaded(true)
    }
    fetchProduct()
  }, [id]);

  if (!loaded) {
    return <h1>Loading...</h1>
  }

  return(
    <Layout user={props.user}>
      <div className="product-detail">
        <h1>Detail page</h1>
        <img className="product-detail-image" src={productDetail.imageURL} alt={productDetail.name}/>
        <div>{productDetail.name}</div>
        <div>{productDetail.price}</div>
        <div>{productDetail.description}</div>
        <div className="edit-button-container"> 
          <button className="edit-button">
            <Link className="edit-button-link" to={`/products/${productDetail._id}/edit`}>
              EDIT
            </Link>
          </button>        
        </div>
        <div className="delete-button-container">
          <button className="delete-button">
            DELETE
          </button> 
        </div>
      </div>     
    </Layout>
  )
}

export default DetailProduct;