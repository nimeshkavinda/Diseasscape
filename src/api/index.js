import { createUser, getLoggedInUser } from "./user";
import { getPatients } from "./patient";
import { getPosts } from "./post";
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
  },
  event: {
    getEvents,
  },
};

export default api;
