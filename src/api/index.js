import { createUser, getLoggedInUser, getUserByUid, updateUser } from "./user";
import { getPatients, createPatient, deletePatient } from "./patient";
import { getPosts, createPost } from "./post";
import { getEvents, createEvent, updateEvent } from "./event";

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
    deletePatient,
  },
  post: {
    getPosts,
    createPost,
  },
  event: {
    getEvents,
    createEvent,
    updateEvent,
  },
};

export default api;
