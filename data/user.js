import { API_BASE_URL } from "./api";

const API_KEY = "AIzaSyDruYB-2SPSCvQ_OzRbPYLOd5EDqKiy674";

export const varifyAuth = async token => {
    const res = await fetch(API_BASE_URL + "/user/isauth", {
        body: {
            token: token
        }
    });
    const isAuth = await res.json();
    return isAuth;
}

export const authenticateUser = async (email, password) => {
    const res = await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`,
        {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email,
                password: password,
                returnSecureToken: true
            })
        });

    return res;
};

export const reAuthenticateUser = async token => {

    let details = {
        "grant_type": "refresh_token",
        "refresh_token": token
    };
    
    let formBody = [];
    for (let property in details) {
        let encodedKey = encodeURIComponent(property);
        let encodedValue = encodeURIComponent(details[property]);
      formBody.push(encodedKey + "=" + encodedValue);
    }
    formBody = formBody.join("&");

    const res = await fetch(`https://securetoken.googleapis.com/v1/token?key=${API_KEY}`,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: formBody
        });

    return res;
};

export const calculateUserAuthExpireSafe = expiresInSeconds => {
    let expiresInMilis = (Number.parseInt(expiresInSeconds) - 1) * 1000;
    const currentUnixEpoch = Date.now();

    return currentUnixEpoch + expiresInSeconds;
};

export const authTokenIsExpired = expiresMilis => {
    return Date.now() > expiresMilis;
};
