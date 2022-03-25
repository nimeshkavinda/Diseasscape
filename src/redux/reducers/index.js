import { combineReducers } from "redux";
import { signIn, signUp, createUser, getLoggedInUser } from "./user";
import { getPatients } from "./patient";

const rootReducer = combineReducers({
  signIn,
  signUp,
  createUser,
  getLoggedInUser,
  getPatients,
});

export default rootReducer;
