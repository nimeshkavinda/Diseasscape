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
  updateUser,
  createPatient,
  deletePatient,
};

export default actions;
