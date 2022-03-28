import types from "../../types";
import { generateSyncAction } from "../../utils";
import API from "../../../api";

export const updateUser = (uid, userData) => async (dispatch) => {
  dispatch(generateSyncAction(types.user.updateUser.started));
  try {
    const data = await API.user.updateUser(uid, userData);
    dispatch(generateSyncAction(types.user.updateUser.success, data));
  } catch (error) {
    dispatch(generateSyncAction(types.user.updateUser.failed, error));
  }
};

export default updateUser;
