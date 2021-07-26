import { useState } from "react";
import Layout from "../../components/Layout/Layout";
import { Redirect } from "react-router-dom";
import { addProduct } from "../../services/products";
import "./AddProduct.css";

const AddProduct = (props) => {
  const [product, setProduct] = useState({
    name: "",
    price: "",
    description: "",
    imageURL: "",
  });
  const [added, setAdded] = useState(false);
  

  const handleChange = (event) => {
    const { name, value } = event.target;
    setProduct({
      ...product,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const add = await addProduct(product);
    setAdded({ add });
  };

  if (added) {
    return <Redirect to={`/products`} />;
  }

  return (
    <Layout user={props.user}>
      <div className="add-product-container">
        <div className="add-heading">Add Your New Dress</div>
        <small>Design you own and sell here!!</small>
        <form className="add-form-container" onSubmit={handleSubmit}>
          <label className="add-label-name">
            Name<span className="add-label-char">*</span>
          </label>
          <input
            className="add-input-name"
            value={product.name}
            name="name"
            required
            autoFocus
            onChange={handleChange}
          />
          <label className="add-label-price">
            Price<span className="add-label-char">*</span>
          </label>
          <input
            className="add-input-price"
            value={product.price}
            name="price"
            required
            onChange={handleChange}
          />
          <label className="add-label-image">
            Image<span className="add-label-char">*</span>
          </label>
          <input
            className="add-input-image"
            value={product.imageURL}
            name="imageURL"
            required
            onChange={handleChange}
          />
          <label className="add-label-description">
            Description<span className="add-label-char">*</span>
          </label>
          <textarea
            className="add-input-description"
            value={product.description}
            name="description"
            required
            onChange={handleChange}
          />

          <div className="add-button-container">
            <button type="submit" className="add-button">
              Add to sell list
            </button>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default AddProduct;
