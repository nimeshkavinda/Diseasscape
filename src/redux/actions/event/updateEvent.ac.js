import types from "../../types";
import { generateSyncAction } from "../../utils";
import API from "../../../api";

export const updateEvent = (id, eventData) => async (dispatch) => {
  dispatch(generateSyncAction(types.event.updateEvent.started));
  try {
    const data = await API.event.updateEvent(id, eventData);
    dispatch(generateSyncAction(types.event.updateEvent.success, data));
  } catch (error) {
    dispatch(generateSyncAction(types.event.updateEvent.failed, error));
  }
};

export default updateEvent;
