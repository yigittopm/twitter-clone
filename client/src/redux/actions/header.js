import action from "../constants/actionTypes";

const changeHeader = (header) => {
    return {
        type: action.CHANGE_HEADER,
        payload: header
    }
}