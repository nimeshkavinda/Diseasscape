import { combineReducers } from "redux";
import {
  signIn,
  signUp,
  createUser,
  getLoggedInUser,
  getUserByUid,
  updateUser,
} from "./user";
import { getPatients, createPatient, deletePatient } from "./patient";
import { getPosts, createPost } from "./post";
import { getEvents, createEvent, updateEvent } from "./event";

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
  createPatient,
  deletePatient,
  updateEvent,
});

export default rootReducer;
