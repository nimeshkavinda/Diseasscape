import types from "../../types";

export const signIn = (state = { fetching: false, error: false }, action) => {
  switch (action.data) {
    case types.user.signIn.started:
      return [...state, { fetching: true }];
    case types.user.signIn.success:
      return [...state, { fetching: false, data: { ...action.data } }];
    case types.user.signIn.failed:
      return [...state, { fetching: false, error: { ...action.data } }];
    default:
      return state;
  }
};

export default signIn;
