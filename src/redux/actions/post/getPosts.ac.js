import types from "../../types";
import { generateSyncAction } from "../../utils";
import API from "../../../api";

export const getPosts = () => async (dispatch) => {
  dispatch(generateSyncAction(types.post.getPosts.started));
  try {
    const data = await API.post.getPosts();
    dispatch(generateSyncAction(types.post.getPosts.success, data));
  } catch (error) {
    dispatch(generateSyncAction(types.post.getPosts.failed, error));
  }
};

export default getPosts;
