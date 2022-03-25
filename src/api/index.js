import { createUser, getLoggedInUser } from "./user";
import { getPatients } from "./patient";
import { getPosts } from "./post";

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
};

export default api;
