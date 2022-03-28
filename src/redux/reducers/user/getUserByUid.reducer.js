import types from "../../types";

export const getUserByUid = (
  state = { fetching: false, error: false },
  action
) => {
  switch (action.type) {
    case types.user.getUserByUid.started:
      return Object.assign({}, { fetching: true });

    case types.user.getUserByUid.success:
      return Object.assign({}, { fetching: false, data: { ...action.data } });

    case types.user.getUserByUid.failed:
      return Object.assign({}, { fetching: false, error: { ...action.data } });

    default:
      return state;
  }
};

export default getUserByUid;
