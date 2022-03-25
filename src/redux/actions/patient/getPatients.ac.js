import types from "../../types";
import { generateSyncAction } from "../../utils";
import API from "../../../api";

export const getPatients = () => async (dispatch) => {
  dispatch(generateSyncAction(types.patient.getPatients.started));
  try {
    const data = await API.patient.getPatients();
    dispatch(generateSyncAction(types.patient.getPatients.success, data));
  } catch (error) {
    dispatch(generateSyncAction(types.patient.getPatients.failed, error));
  }
};

export default getPatients;
