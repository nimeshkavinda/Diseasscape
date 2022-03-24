import { combineReducers } from "redux";
import { signIn, signUp } from "./user";

const rootReducer = combineReducers({
  signIn,
  signUp,
});

export default rootReducer;
