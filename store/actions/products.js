export const SET_PRODUCTS = "SET_PRODUCTS";
export const fetchProducts = () => {
    return async (dispatch, getState, API) => {
        const state = getState();
        const authToken = state.user.user.idToken;
        const fetchedProducts = await API.API_DATA.Products.get.all(authToken);
        if (fetchProducts) dispatch({ type: SET_PRODUCTS, products: fetchedProducts });
    }
};