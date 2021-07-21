import api from "./apiConfig";

export const getProducts = async () => {
  try {
    const resp = await api.get('/products')
    console.log(resp.data)
    return resp.data
  } catch (error) {
    throw error;
  }
}