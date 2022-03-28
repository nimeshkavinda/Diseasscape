import types from "../../types";
import { generateSyncAction } from "../../utils";
import API from "../../../api";

export const getUserByUid = (uid) => async (dispatch) => {
  dispatch(generateSyncAction(types.user.getUserByUid.started));
  try {
    const data = await API.user.getUserByUid(uid);
    dispatch(generateSyncAction(types.user.getUserByUid.success, data));
  } catch (error) {
    dispatch(generateSyncAction(types.user.getUserByUid.failed, error));
  }
};

export default getUserByUid;
