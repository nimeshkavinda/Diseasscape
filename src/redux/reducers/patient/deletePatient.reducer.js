import types from "../../types";

export const deletePatient = (
  state = { fetching: false, error: false },
  action
) => {
  switch (action.type) {
    case types.patient.deletePatient.started:
      return Object.assign({}, { fetching: true });

    case types.patient.deletePatient.success:
      return Object.assign({}, { fetching: false, data: { ...action.data } });

    case types.patient.deletePatient.failed:
      return Object.assign({}, { fetching: false, error: { ...action.data } });

    default:
      return state;
  }
};

export default deletePatient;
