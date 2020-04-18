import {defaultSettings} from "../../data/settings"
import { SET_DARKMODE } from "../actions/settings";

const initialState = {
    settings: defaultSettings
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_DARKMODE:
            return {...state, settings:{darkmode: action.darkmodeOption}};

        default:
            return state;
    }
}

export default reducer;