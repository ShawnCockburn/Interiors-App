import User from "../../models/userModel";
import { SET_USER } from "../actions/user";

const initialState = {
    user: new User()
};


export default (state = initialState, action) => {

    switch (action.type) {

        case SET_USER:
            return {...state, user: action.user}

        default:
            return state;
    }
}