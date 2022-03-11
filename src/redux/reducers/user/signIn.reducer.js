import types from "../../types";

export const signIn = (state = { fetching: false, error: false }, action) => {
  switch (action.type) {
    case types.user.signIn.started:
      return Object.assign({}, { fetching: true });

    case types.user.signIn.success:
      return Object.assign({}, { fetching: false, data: { ...action.data } });

    case types.user.signIn.failed:
      return Object.assign({}, { fetching: false, error: { ...action.data } });

    default:
      return state;
  }
};

export default signIn;
