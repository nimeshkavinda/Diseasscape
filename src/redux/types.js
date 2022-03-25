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
  },
  patient: {
    getPatients: {
      ...generateActionTypes("patient.getPatients"),
    },
  },
};

export default types;
