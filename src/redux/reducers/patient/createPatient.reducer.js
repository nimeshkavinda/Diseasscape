import types from "../../types";

export const createPatient = (
  state = { fetching: false, error: false },
  action
) => {
  switch (action.type) {
    case types.patient.createPatient.started:
      return Object.assign({}, { fetching: true });

    case types.patient.createPatient.success:
      return Object.assign({}, { fetching: false, data: { ...action.data } });

    case types.patient.createPatient.failed:
      return Object.assign({}, { fetching: false, error: { ...action.data } });

    default:
      return state;
  }
};

export default createPatient;
