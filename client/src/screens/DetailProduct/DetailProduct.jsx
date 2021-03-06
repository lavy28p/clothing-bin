import { useState, useEffect } from "react";
import { useParams, Link, Redirect } from "react-router-dom";
import { getProduct, deleteProduct } from "../../services/products";
import Layout from "../../components/Layout/Layout";
import "./DetailProduct.css";

const DetailProduct = (props) => {
  const [productDetail, setProductDetail] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const { id } = useParams();
  const [deleted, setDeleted] = useState(false);

  useEffect(() => {
    const fetchProduct = async () => {
      const product = await getProduct(id);
      setProductDetail(product);
      setLoaded(true);
    };
    fetchProduct();
  }, [id]);

  if (!loaded) {
    return <h1>Loading...</h1>;
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const productDelete = await deleteProduct(productDetail._id);
    setDeleted(productDelete);
  };

  if (deleted) {
    return <Redirect to={`/products`} />;
  }

  return (
    <Layout user={props.user}>
      <div className="product-detail-container">
        <img
          className="product-detail-image"
          src={productDetail.imageURL}
          alt={productDetail.name}
        />
        <div className="product-detail">
          <div className="product-detail-name">{productDetail.name}</div>
          <div className="product-detail-price">{productDetail.price}</div>
          <div className="product-detail-description">
            {productDetail.description}
          </div>
          <div className="button-container">
            <button className="edit-button">
              <Link
                className="edit-button-link"
                to={`/products/${productDetail._id}/edit`}
              >
                Edit
              </Link>
            </button>
            <button className="delete-button" onClick={handleSubmit}>
              Delete
            </button>
          </div>
          </div>
      </div>
    </Layout>
  );
};

export default DetailProduct;
