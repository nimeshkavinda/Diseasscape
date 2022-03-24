import { generateActionTypes } from "./utils";

const types = {
  user: {
    signIn: {
      ...generateActionTypes("user.signIn"),
    },
    signUp: {
      ...generateActionTypes("user.signUp"),
    },
  },
};

export default types;
