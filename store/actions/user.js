import { authenticateUser, reAuthenticateUser, calculateUserAuthExpireSafe } from "../../data/user";
import * as SecureStore from 'expo-secure-store';
import User from "../../models/userModel";

export const SET_USER = "SET_USER";
export const AUTH_USER = "AUTH_USER";

export const setUser = (user) => {
    return { type: SET_USER, user: user }
};

export const authUser = (email, password, errorCallback) => {
    return async dispatch => {
        let user = new User();
        const res = await authenticateUser(email, password);
        const data = await res.json();
        if (res.ok) {
            user = new User(
                data.idToken,
                data.email,
                data.refreshToken,
                data.expiresIn,
                data.localId,
                data.registered,
                calculateUserAuthExpireSafe(data.expiresIn)
            );
            await SecureStore.setItemAsync("user", JSON.stringify(user));
            dispatch({ type: SET_USER, user: user });
        } else {
            errorCallback({ error: data.error, message: data.error.message });
        }
    }
};

export const reAuthUser = () => {
    return async dispatch => {
        const storedUser = await SecureStore.getItemAsync("user");
        let refreshedUser = new User();
        let storedData = JSON.parse(storedUser);
        if (storedData) {
            const res = await reAuthenticateUser(storedData.refreshToken);
            const data = await res.json();

            if (res.ok) {
                const refreshedData = { ...storedData, idToken: data.id_token, refreshToken: data.refresh_token, expiresIn: data.expires_in };
                refreshedUser = new User(
                    refreshedData.idToken,
                    refreshedData.email,
                    refreshedData.refreshToken,
                    refreshedData.expiresIn,
                    refreshedData.localId,
                    refreshedData.registered,
                    calculateUserAuthExpireSafe(refreshedData.expiresIn)
                );
                await SecureStore.setItemAsync("user", JSON.stringify(refreshedUser));
            }
        }
        dispatch({ type: SET_USER, user: refreshedUser });
    }
};

export const logoutUser = () => {
    return async dispatch => {
        SecureStore.deleteItemAsync("user");
        dispatch({ type: SET_USER, user: new User() });
    }
};