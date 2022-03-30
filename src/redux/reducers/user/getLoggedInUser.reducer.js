import types from "../../types";

export const getLoggedInUser = (
  state = { fetching: false, error: false },
  action
) => {
  switch (action.type) {
    case types.user.getLoggedInUser.started:
      return Object.assign({}, { fetching: true });

    case types.user.getLoggedInUser.success:
      return Object.assign({}, { fetching: false, data: { ...action.data } });

    case types.user.getLoggedInUser.failed:
      return Object.assign({}, { fetching: false, error: { ...action.data } });

    default:
      return state;
  }
};

export default getLoggedInUser;
