import { SET_RANGES } from "../actions/ranges";

const initialState = {
    ranges: []
};


export default (state = initialState, action) => {
    switch (action.type) {
        case SET_RANGES:
            return {
                ranges: action.ranges
            };
    
        default:
            return state;
    }
}