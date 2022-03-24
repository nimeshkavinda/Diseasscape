import types from "../../types";

export const createUser = (
  state = { fetching: false, error: false },
  action
) => {
  switch (action.type) {
    case types.user.createUser.started:
      return Object.assign({}, { fetching: true });

    case types.user.createUser.success:
      return Object.assign({}, { fetching: false, data: { ...action.data } });

    case types.user.createUser.failed:
      return Object.assign({}, { fetching: false, error: { ...action.data } });

    default:
      return state;
  }
};

export default createUser;
