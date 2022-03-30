import { createUser, getLoggedInUser, getUserByUid, updateUser } from "./user";
import { getPatients, createPatient } from "./patient";
import { getPosts, createPost } from "./post";
import { getEvents, createEvent } from "./event";

const api = {
  user: {
    createUser,
    getLoggedInUser,
    getUserByUid,
    updateUser,
  },
  patient: {
    getPatients,
    createPatient,
  },
  post: {
    getPosts,
    createPost,
  },
  event: {
    getEvents,
    createEvent,
  },
};

export default api;
