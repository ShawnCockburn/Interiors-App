// import {PRODUCTS} from "../../data/testData";

import { SET_PRODUCTS } from "../actions/products";

const initialState = {
    availableProducts: []
};


export default (state = initialState, action) => {
    switch (action.type) {
        case SET_PRODUCTS:
            return {
                availableProducts: action.products
            };
    
        default:
            return state;
    }
}