export const SET_PRODUCTS = "SET_PRODUCTS";
export const fetchProducts = () => {
    return async (dispatch, getState, API) => {
        const state = getState();
        const {idToken, localId} = state.user.user;
        const fetchedProducts = await API.API_DATA.Products.get.all(localId, idToken);
        if (fetchProducts) dispatch({ type: SET_PRODUCTS, products: fetchedProducts });
    }
};