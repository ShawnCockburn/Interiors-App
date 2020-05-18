export const SET_CATEGORIES = "SET_CATEGORIES";
export const fetchCategories = () => {
    return async (dispatch, getState, API) => {
        const state = getState();
        const authToken = state.user.user.idToken;
        const fetchedCategories = await API.API_DATA.Categories.get.all(authToken);
        if (fetchedCategories) dispatch({ type: SET_CATEGORIES, categories: fetchedCategories });
    }
};