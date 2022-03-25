import { createUser, getLoggedInUser } from "./user";
import { getPatients } from "./patient";
import { getPosts, createPost } from "./post";
import { getEvents } from "./event";

const api = {
  user: {
    createUser,
    getLoggedInUser,
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
  },
};

export default api;
