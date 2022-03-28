import { combineReducers } from "redux";
import {
  signIn,
  signUp,
  createUser,
  getLoggedInUser,
  getUserByUid,
  updateUser,
} from "./user";
import { getPatients } from "./patient";
import { getPosts, createPost } from "./post";
import { getEvents, createEvent } from "./event";

const rootReducer = combineReducers({
  signIn,
  signUp,
  createUser,
  getLoggedInUser,
  getPatients,
  getPosts,
  getEvents,
  createPost,
  createEvent,
  getUserByUid,
  updateUser,
});

export default rootReducer;
