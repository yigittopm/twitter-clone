import { createStore } from "redux";
import rootReducers from "./redux/reducers/index";

const store = createStore(rootReducers);

export default store;
