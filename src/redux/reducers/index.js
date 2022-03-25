import { combineReducers } from "redux";
import { signIn, signUp, createUser, getLoggedInUser } from "./user";

const rootReducer = combineReducers({
  signIn,
  signUp,
  createUser,
  getLoggedInUser,
});

export default rootReducer;
