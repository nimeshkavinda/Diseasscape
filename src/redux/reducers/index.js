import { combineReducers } from "redux";
import { signIn, signUp, createUser, getLoggedInUser } from "./user";
import { getPatients } from "./patient";
import { getPosts } from "./post";
import { getEvents } from "./event";

const rootReducer = combineReducers({
  signIn,
  signUp,
  createUser,
  getLoggedInUser,
  getPatients,
  getPosts,
  getEvents,
});

export default rootReducer;
