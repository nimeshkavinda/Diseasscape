import types from "../../types";
import { generateSyncAction } from "../../utils";
import API from "../../../api";

export const createPatient = (uid, patientData) => async (dispatch) => {
  dispatch(generateSyncAction(types.patient.createPatient.started));
  try {
    const data = await API.patient.createPatient(uid, patientData);
    dispatch(generateSyncAction(types.patient.createPatient.success, data));
  } catch (error) {
    dispatch(generateSyncAction(types.patient.createPatient.failed, error));
  }
};

export default createPatient;
