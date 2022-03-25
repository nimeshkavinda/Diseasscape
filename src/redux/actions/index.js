import { signIn, signUp, createUser, getLoggedInUser } from "./user";
import { getPatients } from "./patient";
import { getPosts, createPost } from "./post";
import { getEvents } from "./event";

const actions = {
  signIn,
  signUp,
  createUser,
  getLoggedInUser,
  getPatients,
  getPosts,
  getEvents,
  createPost,
};

export default actions;
