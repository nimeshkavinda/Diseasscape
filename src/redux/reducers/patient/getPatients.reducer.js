import types from "../../types";

export const getPatients = (
  state = { fetching: false, error: false },
  action
) => {
  switch (action.type) {
    case types.user.getPatients.started:
      return Object.assign({}, { fetching: true });

    case types.user.getPatients.success:
      return Object.assign({}, { fetching: false, data: { ...action.data } });

    case types.user.getPatients.failed:
      return Object.assign({}, { fetching: false, error: { ...action.data } });

    default:
      return state;
  }
};

export default getPatients;
