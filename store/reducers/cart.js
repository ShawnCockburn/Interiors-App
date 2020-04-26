import { ADD_TO_CART, UPDATE_CART_QUANTITY, REMOVE_FROM_CART } from "../actions/cart";
import CartItem from "../../models/cartItemModel";

const initialState = {
    items: []
};


export default (state = initialState, action) => {

    let cart = state.items;

    switch (action.type) {

        case ADD_TO_CART:

            if (cart.some(item => item.productId === action.payload.productId)) {
                const newCart = cart.map(item => {
                    if (item.productId === action.payload.productId) {
                        item.quantity += action.payload.quantity
                    }
                    return item;
                });
                return { ...state, items: [...newCart] };

            } else {
                cart.push(new CartItem(action.payload.productId, action.payload.quantity));
                return { ...state, items: [...cart] };
            }



        case UPDATE_CART_QUANTITY:

            const updatedCart = cart.map(item => {
                if (item.productId === action.payload.productId) {
                    action.payload.quantity < 1 ? item.quantity : item.quantity = action.payload.quantity
                }
                return item;
            });
            return { ...state, items: [...updatedCart] };

        case REMOVE_FROM_CART:

            const newCart = cart.filter(item => {
                if (item.productId === action.payload.productId) {
                    return false;
                }
                return true;
            });
            return { ...state, items: [...newCart] };


        default:
            return state;
    }
}