import {
  signIn,
  signUp,
  createUser,
  getLoggedInUser,
  getUserByUid,
} from "./user";
import { getPatients } from "./patient";
import { getPosts, createPost } from "./post";
import { getEvents, createEvent } from "./event";

const actions = {
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
};

export default actions;
