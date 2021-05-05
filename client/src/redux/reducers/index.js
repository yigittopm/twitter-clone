import { combineReducers } from "redux";
import headerReducer  from "./headerReducer";

const allReducers = combineReducers({
    header: headerReducer
});

export default allReducers;