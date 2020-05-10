import { getAllRanges } from "../../data/data";

export const SET_RANGES = "SET_RANGES";
export const fetchRanges = () => {
    return async dispatch => {
        const fetchedRanges = await getAllRanges();
        dispatch({ type: SET_RANGES, ranges: fetchedRanges });
    }
};