import User from "../../models/userAuthModel";
import UserData from "../../models/userDataModel";
import { SET_USER, SET_USER_DATA } from "../actions/user";

const initialState = {
    user: new User(),
    userData: new UserData()
};


export default (state = initialState, action) => {

    switch (action.type) {

        case SET_USER:
            return { ...state, user: action.user }

        case SET_USER_DATA:
            return { ...state, userData: action.userData }

        default:
            return state;
    }
}