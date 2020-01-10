import { combineReducers } from "redux";
import fetchNote from "../reducer/fetchNote"
const reducers=combineReducers({note:fetchNote})
export default reducers;


