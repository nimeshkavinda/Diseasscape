import { generateActionTypes } from "./utils";

const types = {
  user: {
    signIn: {
      ...generateActionTypes("user.signIn"),
    },
    signUp: {
      ...generateActionTypes("user.signUp"),
    },
    createUser: {
      ...generateActionTypes("user.createUser"),
    },
    getLoggedInUser: {
      ...generateActionTypes("user.getLoggedInUser"),
    },
    getUserByUid: {
      ...generateActionTypes("user.getUserByUid"),
    },
    updateUser: {
      ...generateActionTypes("user.updateUser"),
    },
  },
  patient: {
    getPatients: {
      ...generateActionTypes("patient.getPatients"),
    },
    createPatient: {
      ...generateActionTypes("patient.createPatient"),
    },
    deletePatient: {
      ...generateActionTypes("patient.deletePatient"),
    },
  },
  post: {
    getPosts: {
      ...generateActionTypes("post.getPosts"),
    },
    createPost: {
      ...generateActionTypes("post.createPost"),
    },
  },
  event: {
    getEvents: {
      ...generateActionTypes("event.getEvents"),
    },
    createEvent: {
      ...generateActionTypes("event.createEvent"),
    },
  },
};

export default types;
