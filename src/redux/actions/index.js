import { signIn, signUp, createUser, getLoggedInUser } from "./user";
import { getPatients } from "./patient";
import { getPosts } from "./post";

const actions = {
  signIn,
  signUp,
  createUser,
  getLoggedInUser,
  getPatients,
  getPosts,
};

export default actions;
