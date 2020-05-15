export const SET_PROMOTIONS = "SET_PROMOTIONS";
export const fetchPromotions = () => {
    return async (dispatch, getState, API) => {
        const state = getState();
        const authToken = state.user.user.idToken;
        const fetchedPromotions = await API.API_DATA.Promotions.get.all(authToken);
        if (fetchedPromotions) dispatch({ type: SET_PROMOTIONS, promotions: fetchedPromotions });
    }
};