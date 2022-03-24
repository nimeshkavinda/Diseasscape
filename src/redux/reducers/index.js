import { combineReducers } from "redux";
import { signIn, signUp, createUser } from "./user";

const rootReducer = combineReducers({
  signIn,
  signUp,
  createUser,
});

export default rootReducer;
