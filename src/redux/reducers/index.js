import {combineReducers} from "redux";
import LoginReducer from "./LoginReducer";
import TableDataReducer from "./TableDataReducer";

export default combineReducers({
    LoginReducer,
    TableDataReducer
});
