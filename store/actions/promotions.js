export const SET_PROMOTIONS = "SET_PROMOTIONS";
export const fetchPromotions = () => {
    return async (dispatch, getState, API) => {
        const state = getState();
        const {idToken, localId} = state.user.user;
        const fetchedPromotions = await API.API_DATA.Promotions.get.all(localId, idToken);
        if (fetchedPromotions) dispatch({ type: SET_PROMOTIONS, promotions: fetchedPromotions });
    }
};