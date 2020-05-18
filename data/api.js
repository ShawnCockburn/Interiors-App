import Product from "../models/productModel";
import Range from "../models/rangeModel";
import Promotion from "../models/promotionModel";
import Category from "../models/categoryModel";
import CartItem from "../models/cartItemModel";

//api request
export const API_BASE_URL = "http://192.168.1.108:3000";
export const API_ROUTES = {
    CART: {
        ROOT: "/cart"
    },
    CATEGORIES: {
        ROOT: "/categories"
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
export const apiRequest = async (route, userId, authToken, method, body = {}, headers = {}) => {
    if (!route) return;
    if (!method) method = "GET";
    const options = {
        method: method,
        headers: {
            "user_id": userId,
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

const getAllProducts = async (userId, authToken) => {
    const res = await apiRequest(API_ROUTES.PRODUCTS.ROOT, userId, authToken);
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

const getAllRanges = async (userId, authToken) => {
    const res = await apiRequest(API_ROUTES.RANGES.ROOT, userId, authToken);
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

const getAllPromotions = async (userId, authToken) => {
    const res = await apiRequest(API_ROUTES.PROMOTIONS.ROOT, userId, authToken);
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

const getAllCategories = async (userId, authToken) => {
    const res = await apiRequest(API_ROUTES.CATEGORIES.ROOT, userId, authToken);
    const resData = await res.json();
    if (!resData) return;

    return resData.map(category => {
        return new Category(
            category._id,
            category.title,
            category.imageURL
        );
    });
};

const getCart = async (userId, authToken) => {
    const res = await apiRequest(API_ROUTES.CART.ROOT, userId, authToken);
    const resData = await res.json();
    if (!resData) return;

    return resData.cart.map(cartItem => {
        return new CartItem(
            cartItem.productId,
            cartItem.quantity
        );
    });
};

const setCart = async ( userId, authToken, cartItems ) => {

    const body = {
        cart: cartItems
    }

    const res = await apiRequest(API_ROUTES.CART.ROOT, userId, authToken, "POST", body);
    const resData = await res.json();
    if (!resData) return;

    return resData.cart.map(cartItem => {
        return new CartItem(
            cartItem.productId,
            cartItem.quantity
        );
    });
};

const updateCart = async (userId, authToken, cartItem, method ) => {

    const body = {
        cartItem: cartItem
    }

    const res = await apiRequest(API_ROUTES.CART.ROOT, userId, authToken, method, body);
    const resData = await res.json();
    if (!resData) return;

    return resData.cart.map(cartItem => {
        return new CartItem(
            cartItem.productId,
            cartItem.quantity
        );
    });
};

const updateCartItem = async ( userId, authToken, cartItem ) => {
    return updateCart( userId, authToken, cartItem, "PUT");
};

const deleteCartItem = async (userId, authToken, cartItem ) => {
    return updateCart( userId, authToken, cartItem, "DELETE");
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
    },
    Categories: {
        get: {
            all: getAllPromotions
        }
    }
};