import types from "../../types";

export const updateUser = (
  state = { fetching: false, error: false },
  action
) => {
  switch (action.type) {
    case types.user.updateUser.started:
      return Object.assign({}, { fetching: true });

    case types.user.updateUser.success:
      return Object.assign({}, { fetching: false, data: { ...action.data } });

    case types.user.updateUser.failed:
      return Object.assign({}, { fetching: false, error: { ...action.data } });

    default:
      return state;
  }
};

export default updateUser;
