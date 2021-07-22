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

export const updateProduct = async (id, product) => {
  try {
    console.log("in update4")
      const resp = await api.put(`/products/${id}`, product)
      console.log(resp.data)
      console.log("in update5")
      return resp.data
  } catch (error) {
      throw error
  }
}