import Product from "../models/productModel";
import Range from "../models/rangeModel";
import Promotion from "../models/promotionModel";
import CartItem from "../models/cartItemModel";

//api request
export const API_BASE_URL = "http://192.168.1.108:3000";
export const API_ROUTES = {
    CART: {
        ROOT: "/cart"
    },
    PRODUCTS: {
        ROOT: "/products"
    },
    PROMOTIONS: {
        ROOT: "/promotions"
    },
    RANGES: {
        ROOT: "/ranges"
    },
    USER: {
        ROOT: "/user"
    }
}
export const apiRequest = async (route, authToken, method, body = {}, headers = {}) => {
    if (!route) return;
    if (!method) method = "GET";
    const options = {
        method: method,
        headers: {
            "auth_token": authToken,
            'Content-Type': 'application/json',
            ...headers
        }
    };
    
    //make sure methord does not match before adding body
    if (!["GET", "HEAD"].some(m => m === method)) options.body = JSON.stringify(body);

    const res = await fetch(API_BASE_URL + route, options);

    //todo: display error message if there is error
    if (!res.ok) {console.log(await res.json());return;}

    return res;
};


//api data using api request

const getAllProducts = async (authToken) => {
    const res = await apiRequest(API_ROUTES.PRODUCTS.ROOT, authToken);
    const resData = await res.json();

    if (!resData) return;
    return resData.map(product => {
        return new Product(
            product._id,
            product.code,
            product.name,
            product.description,
            product.imageURLs,
            product.stock,
            product.height,
            product.width,
            product.depth,
            product.weight,
            product.color,
            product.material,
            product.price
        );
    });
};

const getAllRanges = async (authToken) => {
    const res = await apiRequest(API_ROUTES.RANGES.ROOT, authToken);
    const resData = await res.json();

    if (!resData) return;

    return resData.map(range => {
        return new Range(
            range._id,
            range.name,
            range.description,
            range.imageURL,
            range.productIds
        );
    });
};

const getAllPromotions = async (authToken) => {
    const res = await apiRequest(API_ROUTES.PROMOTIONS.ROOT, authToken);
    const resData = await res.json();
    if (!resData) return;

    return resData.map(promotion => {
        return new Promotion(
            promotion._id,
            promotion.title,
            promotion.imageURL
        );
    });
};

const getCart = async (userId, authToken) => {
    const body = {
        userId: userId
    }
    const res = await apiRequest(API_ROUTES.CART.ROOT, authToken);
    const resData = await res.json();
    if (!resData) return;

    return resData.cart.map(cartItem => {
        return new CartItem(
            cartItem.productId,
            cartItem.quantity
        );
    });
};

const setCart = async (authToken, userId, cartItems ) => {

    const body = {
        userId: userId,
        cart: cartItems
    }

    const res = await apiRequest(API_ROUTES.CART.ROOT, authToken, "POST", body);
    const resData = await res.json();
    if (!resData) return;

    return resData.cart.map(cartItem => {
        return new CartItem(
            cartItem.productId,
            cartItem.quantity
        );
    });
};

const updateCart = async (authToken, userId, cartItem, method ) => {

    const body = {
        userId: userId,
        cartItem: cartItem
    }

    const res = await apiRequest(API_ROUTES.CART.ROOT, authToken, method, body);
    const resData = await res.json();
    if (!resData) return;

    return resData.cart.map(cartItem => {
        return new CartItem(
            cartItem.productId,
            cartItem.quantity
        );
    });
};

const updateCartItem = async (authToken, userId, cartItem ) => {

    return updateCart(authToken,userId, cartItem, "PUT");
    // const body = {
    //     userId: userId,
    //     cartItem: cartItem
    // }

    // const res = await apiRequest(API_ROUTES.CART.ROOT, authToken, "PUT", body);
    // const resData = await res.json();
    // if (!resData) return;

    // return resData.cart.map(cartItem => {
    //     return new CartItem(
    //         cartItem.productId,
    //         cartItem.quantity
    //     );
    // });
};

const deleteCartItem = async (authToken, userId, cartItem ) => {
    return updateCart(authToken, userId, cartItem, "DELETE");
    // const body = {
    //     userId: userId,
    //     cartItem: cartItem
    // }

    // const res = await apiRequest(API_ROUTES.CART.ROOT, authToken, "DELETE", body);
    // const resData = await res.json();
    // if (!resData) return;

    // return resData.cart.map(cartItem => {
    //     return new CartItem(
    //         cartItem.productId,
    //         cartItem.quantity
    //     );
    // });
};

export const API_DATA = {
    Products: {
        get: {
            all: getAllProducts
        }
    },
    Ranges: {
        get: {
            all: getAllRanges
        }
    },
    Promotions: {
        get: {
            all: getAllPromotions
        }
    },
    Cart: {
        get: {
            all: getCart
        },
        set: setCart,
        update: updateCartItem,
        delete: deleteCartItem
    }
};