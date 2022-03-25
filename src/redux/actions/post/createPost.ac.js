import types from "../../types";
import { generateSyncAction } from "../../utils";
import API from "../../../api";

export const createPost = (post) => async (dispatch) => {
  dispatch(generateSyncAction(types.post.createPost.started));
  try {
    const data = await API.post.createPost(post);
    dispatch(generateSyncAction(types.post.createPost.success, data));
  } catch (error) {
    dispatch(generateSyncAction(types.post.createPost.failed, error));
  }
};

export default createPost;
