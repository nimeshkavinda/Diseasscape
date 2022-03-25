import types from "../../types";
import { generateSyncAction } from "../../utils";
import API from "../../../api";

export const getLoggedInUser = (uid) => async (dispatch) => {
  dispatch(generateSyncAction(types.user.getLoggedInUser.started));
  try {
    const data = await API.user.getLoggedInUser(uid);
    dispatch(generateSyncAction(types.user.getLoggedInUser.success, data));
  } catch (error) {
    dispatch(generateSyncAction(types.user.getLoggedInUser.failed, error));
  }
};

export default getLoggedInUser;
