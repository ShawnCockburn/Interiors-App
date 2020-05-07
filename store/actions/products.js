import { getAllProducts } from "../../data/data";

export const SET_PRODUCTS = "SET_PRODUCTS";
export const fetchProducts = () => {
    return async dispatch => {
        const fetchedProducts = await getAllProducts();
        dispatch({ type: SET_PRODUCTS, products: fetchedProducts });
    }
};