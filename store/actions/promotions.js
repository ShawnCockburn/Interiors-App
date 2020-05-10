import { getAllPromotions } from "../../data/data";

export const SET_PROMOTIONS = "SET_PROMOTIONS";
export const fetchPromotions = () => {
    return async dispatch => {
        const fetchedPromotions = await getAllPromotions();
        dispatch({ type: SET_PROMOTIONS, promotions: fetchedPromotions });
    }
};