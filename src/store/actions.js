import { SHOW_PRODUCTS, SHOW_PRODUCT } from "./type";
import { getProducts, getOneProduct } from "../services/products";

export const showProducts = (products) => ({
  type: SHOW_PRODUCTS,
  payload: products,
});
export const showProduct = (id) => ({ type: SHOW_PRODUCT, payload: id });

export const fetchProduct = () => async (dispatch) => {
  try {
    const products = await getProducts();
    dispatch(showProducts(products));
  } catch (error) {
    console.log(error);
  }
};

export const fetchOneProduct = (id) => async (dispatch) => {
  try {
    const product = await getOneProduct(id);
    dispatch(getOneProduct(product));
  } catch (error) {
    console.log(error);
  }
};
