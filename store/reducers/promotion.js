import { SET_PROMOTIONS } from "../actions/promotions";

const initialState = {
    promotions: []
};


export default (state = initialState, action) => {
    switch (action.type) {
        case SET_PROMOTIONS:
            return {
                promotions: action.promotions
            };
        default:
            return state;
    }
}