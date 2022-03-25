import { createUser, getLoggedInUser } from "./user";
import { getPatients } from "./patient";

const api = {
  user: {
    createUser,
    getLoggedInUser,
  },
  patient: {
    getPatients,
  },
};

export default api;
