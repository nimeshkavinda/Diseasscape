import types from "../../types";
import { generateSyncAction } from "../../utils";
import API from "../../../api";

export const deletePatient = (uid) => async (dispatch) => {
  dispatch(generateSyncAction(types.patient.deletePatient.started));
  try {
    const data = await API.patient.deletePatient(uid);
    dispatch(generateSyncAction(types.patient.deletePatient.success, data));
  } catch (error) {
    dispatch(generateSyncAction(types.patient.deletePatient.failed, error));
  }
};

export default deletePatient;
