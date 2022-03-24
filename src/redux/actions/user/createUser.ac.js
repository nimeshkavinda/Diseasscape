import types from "../../types";
import { generateSyncAction } from "../../utils";
import API from "../../../api";

export const createUser = (user) => async (dispatch) => {
  dispatch(generateSyncAction(types.user.createUser.started));
  try {
    const data = await API.user.createUser(user);
    dispatch(generateSyncAction(types.user.createUser.success, data));
  } catch (error) {
    dispatch(generateSyncAction(types.user.createUser.failed, error));
  }
};

export default createUser;
