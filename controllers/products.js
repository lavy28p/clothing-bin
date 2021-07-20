import Product from '../models/product.js'

export const getProducts = async (req, res) => {
  try {
    const products = await Product.find()
    res.json(products)
  } catch (error) {
    res.status(500).send({ error: error.message })
  }
}

export const getProduct = async (req, res) => {
  try {
    const { _id } = req.params
    const product = await Product.findById(_id).populate('userId')
    if (product) {
      res.json(product)
    }
    res.status(404).json({ message: 'Product not found!' })
  } catch (error) {
    console.log(error.message)
    res.status(500).send({ error: error.message })
  }
}