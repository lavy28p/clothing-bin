import { useState, useEffect } from "react";
import Layout from "../../components/Layout/Layout";
import { getProduct, updateProduct } from "../../services/products";
import { useParams, Redirect } from "react-router-dom";


const EditProduct = (props) => {
  const [product, setProduct] = useState({
    name: "",
    price: "",
    imageURL: "",
    description: "",
  })

  const[updated, setUpdated] = useState(false)
  let { id } = useParams()

  useEffect(() => {
    const fetchProduct = async () => {
      const product = await getProduct(id)
      console.log(product)
      setProduct(product)
    }
    fetchProduct()
  }, [id]);


  const handleChange = async (event) => {
    const { name, value } = event.target
    setProduct({
      ...product,
      [name]: value,
    })
    console.log(product)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const update = await updateProduct(id, product)
    console.log(update)
    setUpdated(update)
  }

  if(updated) {
    return <Redirect to={`/products/${id}`}/>
  }

  return(
    <Layout user={props.user}>
      <h1>Edit Page</h1>
      <div className="product-edit">   
        <img className="product-edit-image" src={product.imageURL} alt={product.name}/>
        <form className="edit-form" onSubmit={handleSubmit}>
          <input className="edit-name" placeholder="Name" value={product.name} name="name" required autoFocus onChange={handleChange}/>
          <input className="edit-description" placeholder="Description" value={product.description} name="description" required autoFocus onChange={handleChange}/>
          <button type="submit" className="save-button">
            SAVE
          </button>
        </form>                
      </div>     
    </Layout>
  )
}

export default EditProduct;