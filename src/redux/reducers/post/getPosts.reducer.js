import types from "../../types";

export const getPosts = (state = { fetching: false, error: false }, action) => {
  switch (action.type) {
    case types.post.getPosts.started:
      return Object.assign({}, { fetching: true });

    case types.post.getPosts.success:
      return Object.assign({}, { fetching: false, data: { ...action.data } });

    case types.post.getPosts.failed:
      return Object.assign({}, { fetching: false, error: { ...action.data } });

    default:
      return state;
  }
};

export default getPosts;
