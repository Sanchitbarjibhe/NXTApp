import { combineReducers } from "redux";

import customers from "./customers";
import auth from "./auth";

export const reducers = combineReducers({
    customers,
    auth,
});
