import types from "../../types";

export const createPost = (
  state = { fetching: false, error: false },
  action
) => {
  switch (action.type) {
    case types.post.createPost.started:
      return Object.assign({}, { fetching: true });

    case types.post.createPost.success:
      return Object.assign({}, { fetching: false, data: { ...action.data } });

    case types.post.createPost.failed:
      return Object.assign({}, { fetching: false, error: { ...action.data } });

    default:
      return state;
  }
};

export default createPost;
