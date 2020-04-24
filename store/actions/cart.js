export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const UPDATE_CART_QUANTITY = "UPDATE_CART_QUANTITY";

export const addToCart = (productId, quantity) => {

    return {
        type: ADD_TO_CART,
        payload: {
            productId,
            quantity: quantity
        }
    }
};

export const removeFromCart = productId => {

    return {
        type: REMOVE_FROM_CART,
        payload: {
            productId
        }
    }
};

export const updateCartQuantity = (productId, quantity) => {

    return {
        type: UPDATE_CART_QUANTITY,
        payload: {
            productId,
            quantity: quantity
        }

    }
};