import { combineReducers } from "redux";
import { signIn, signUp, createUser, getLoggedInUser } from "./user";
import { getPatients } from "./patient";
import { getPosts } from "./post";

const rootReducer = combineReducers({
  signIn,
  signUp,
  createUser,
  getLoggedInUser,
  getPatients,
  getPosts,
});

export default rootReducer;
