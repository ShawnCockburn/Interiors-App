export const SET_RANGES = "SET_RANGES";
export const fetchRanges = () => {
    return async (dispatch, getState, API) => {
        const state = getState();
        const {idToken, localId} = state.user.user;
        const fetchedRanges = await API.API_DATA.Ranges.get.all(localId, idToken);
        if (fetchedRanges) dispatch({ type: SET_RANGES, ranges: fetchedRanges });
    }
};