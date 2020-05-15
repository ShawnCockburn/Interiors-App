// import { setCart } from "../../data/data";

import CartItem from "../../models/cartItemModel";

export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const UPDATE_CART_QUANTITY = "UPDATE_CART_QUANTITY";

export const addToCart = (productId, quantity) => {
    return async (dispatch, getState, API) => {
        const cartItem = {...new CartItem(productId, quantity)};
        const state = getState();
        const {idToken, localId} = state.user.user;
        const fetchedCart = await API.API_DATA.Cart.update(idToken, localId, cartItem);
        if (fetchedCart)  dispatch({
            type: ADD_TO_CART,
            payload: fetchedCart
        });
    }
};

export const removeFromCart = productId => {

    return async (dispatch, getState, API) => {
        const cartItem = {...new CartItem(productId, 1)};
        const state = getState();
        const {idToken, localId} = state.user.user;
        const fetchedCart = await API.API_DATA.Cart.delete(idToken, localId, cartItem);
        if (fetchedCart)  dispatch({
            type: UPDATE_CART_QUANTITY,
            payload: fetchedCart
        });
    }

    // return {
    //     type: REMOVE_FROM_CART,
    //     payload: {
    //         productId
    //     }
    // }
};

export const updateCartQuantity = (productId, quantity) => {
    return async (dispatch, getState, API) => {
        const cartItem = {...new CartItem(productId, quantity)};
        const state = getState();
        const {idToken, localId} = state.user.user;
        const fetchedCart = await API.API_DATA.Cart.update(idToken, localId, cartItem);
        if (fetchedCart)  dispatch({
            type: UPDATE_CART_QUANTITY,
            payload: fetchedCart
        });
    }

    // return {
    //     type: UPDATE_CART_QUANTITY,
    //     payload: {
    //         productId,
    //         quantity: quantity
    //     }

    // }
};

export const getCart = () => {
    return async (dispatch, getState, API) => {
        const state = getState();
        const {idToken, localId} = state.user.user;
        const fetchedCart = await API.API_DATA.Cart.get.all(idToken, localId);
        if (fetchedCart)  dispatch({
            type: ADD_TO_CART,
            payload: fetchedCart
        });
    }
};