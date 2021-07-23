import api from "./apiConfig";

export const getProducts = async () => {
  try {
    const resp = await api.get('/products')
    return resp.data
  } catch (error) {
    throw error;
  }
}

export const getProduct = async (id) => {
  try {
    const resp = await api.get(`/products/${id}`)
    return resp.data
  } catch (error) {
    throw error;
  }
}

export const addProduct = async product => {
  try {
      const res = await api.post('/products', product)
      return res.data
  } catch (error) {
      throw error
  }
}

export const updateProduct = async (id, product) => {
  try {
      const resp = await api.put(`/products/${id}`, product)
      console.log(resp.data)
      return resp.data
  } catch (error) {
      throw error
  }
}

export const deleteProduct = async id => {
  try {
      const res = await api.delete(`/products/${id}`)
      return res.data
  } catch (error) {
      throw error
  }
}