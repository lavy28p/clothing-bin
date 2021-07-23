import { useState } from "react"
import Layout from "../../components/Layout/Layout"
import { Redirect } from 'react-router-dom'
import { addProduct } from '../../services/products'

const AddProduct = (props) => {
  const [product, setProduct] = useState({
    name: '',
    price: '',
    description: '',
    imageURL: '',
  })
  const [added, setAdded] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target
    setProduct({
      ...product,
      [name]: value,
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const add = await addProduct(product)
    setAdded({ add })
  }

  if (added) {
    return <Redirect to={`/products`} />
  }

  return (
    <Layout user={props.user}>
      <h1>Add Your New Dress</h1>
      <small>Design you own and sell here!!</small>
      <form className="add-form" onSubmit={handleSubmit}>
        <label>Name*</label>
        <input className = "add-name" value={product.name} name='name' required autoFocus onChange={handleChange} />
        <label>Price*</label>
        <input className = "add-price" value={product.price} name='price' required onChange={handleChange} />
        <label>Description*</label>
        <textarea className = "add-description" value={product.description} name='description' required onChange={handleChange} />
        <label>Image*</label>
        <input className = "add-image" value={product.imageURL} name='imageURL' required onChange={handleChange} />
        <button type='submit' className='submit-button'>
          Add to sell list
        </button>
      </form>
    </Layout>
    
  )
}

export default AddProduct