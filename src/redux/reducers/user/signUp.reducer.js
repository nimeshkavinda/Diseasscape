import types from "../../types";

export const signUp = (state = { fetching: false, error: false }, action) => {
  switch (action.type) {
    case types.user.signUp.started:
      return Object.assign({}, { fetching: true });

    case types.user.signUp.success:
      return Object.assign({}, { fetching: false, data: { ...action.data } });

    case types.user.signUp.failed:
      return Object.assign({}, { fetching: false, error: { ...action.data } });

    default:
      return state;
  }
};

export default signUp;
