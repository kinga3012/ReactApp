import {combineReducers} from "redux";
import loginReducer from "./loginReducer";
import messageBoxReducer from "./messageBoxReducer";

export default combineReducers({loginReducer, messageBoxReducer});