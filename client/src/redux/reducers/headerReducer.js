import action from "../constants/actionTypes";

const headerReducer = (state="Home", action) => {
    switch(action.type){
        case action.CHANGE_HEADER:
            return action.payload;
        default:
            return state;
    }
}

export default headerReducer;