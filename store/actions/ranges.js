export const SET_RANGES = "SET_RANGES";
export const fetchRanges = () => {
    return async (dispatch, getState, API) => {
        const state = getState();
        const authToken = state.user.user.idToken;
        const fetchedRanges = await API.API_DATA.Ranges.get.all(authToken);
        if (fetchedRanges) dispatch({ type: SET_RANGES, ranges: fetchedRanges });
    }
};