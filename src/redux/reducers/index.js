import { combineReducers } from "redux";
import { signIn } from "./user";

const rootReducer = combineReducers({
  signIn,
});

export default rootReducer;
