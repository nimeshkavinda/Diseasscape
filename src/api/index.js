import { createUser, getLoggedInUser, getUserByUid, updateUser } from "./user";
import { getPatients } from "./patient";
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
