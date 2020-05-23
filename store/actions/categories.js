export const SET_CATEGORIES = "SET_CATEGORIES";
export const fetchCategories = () => {
    return async (dispatch, getState, API) => {
        const state = getState();
        const {idToken, localId} = state.user.user;
        const fetchedCategories = await API.API_DATA.Categories.get.all(localId, idToken);
        if (fetchedCategories) dispatch({ type: SET_CATEGORIES, categories: fetchedCategories });
    }
};