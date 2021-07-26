import { useState, useEffect } from "react";
import Layout from "../../components/Layout/Layout";
import { getProduct, updateProduct } from "../../services/products";
import { useParams, Redirect } from "react-router-dom";
import "./EditProduct.css";

const EditProduct = (props) => {
  const [product, setProduct] = useState({
    name: "",
    price: "",
    imageURL: "",
    description: "",
  });

  const [updated, setUpdated] = useState(false);
  let { id } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      const product = await getProduct(id);
      console.log(product);
      setProduct(product);
    };
    fetchProduct();
  }, [id]);

  const handleChange = async (event) => {
    const { name, value } = event.target;
    setProduct({
      ...product,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const update = await updateProduct(id, product);
    setUpdated(update);
  };

  if (updated) {
    return <Redirect to={`/products/${id}`} />;
  }

  return (
    <Layout user={props.user}>
      <div className="product-edit-container">
        <div className="product-edit">
          <img
            className="product-edit-image"
            src={product.imageURL}
            alt={product.name}
          />
          <form className="edit-form-container" onSubmit={handleSubmit}>
            <div className="edit-heading-container">
              <div className="edit-heading">{product.name}</div>
            </div>
            <div className="edit-name-container">
              <input
                className="edit-name"
                placeholder="Name"
                value={product.name}
                name="name"
                required
                autoFocus
                onChange={handleChange}
              />
            </div>
            <div className="edit-price-container">
              <input
                className="edit-price"
                placeholder="Price"
                value={product.price}
                name="price"
                required
                autoFocus
                onChange={handleChange}
              />
            </div>
            <div className="edit-description-container">
              <textarea
                className="edit-description"
                placeholder="Description"
                value={product.description}
                name="description"
                required
                autoFocus
                onChange={handleChange}
              />
            </div>
            <div className="edit-image-container">
              <input
                className="edit-image"
                placeholder="Image"
                value={product.imageURL}
                name="imageURL"
                required
                autoFocus
                onChange={handleChange}
              />
            </div>
            <div className="save-button-container">
              <button type="submit" className="save-button">
                SAVE
              </button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default EditProduct;
