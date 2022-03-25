import types from "../../types";
import { generateSyncAction } from "../../utils";
import API from "../../../api";

export const createEvent = (event) => async (dispatch) => {
  dispatch(generateSyncAction(types.event.createEvent.started));
  try {
    const data = await API.event.createEvent(event);
    dispatch(generateSyncAction(types.event.createEvent.success, data));
  } catch (error) {
    dispatch(generateSyncAction(types.event.createEvent.failed, error));
  }
};

export default createEvent;
