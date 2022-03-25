import { signIn, signUp, createUser, getLoggedInUser } from "./user";
import { getPatients } from "./patient";

const actions = {
  signIn,
  signUp,
  createUser,
  getLoggedInUser,
  getPatients,
};

export default actions;
