import types from "../../types";
import { generateSyncAction } from "../../utils";
import API from "../../../api";

export const getEvents = () => async (dispatch) => {
  dispatch(generateSyncAction(types.event.getEvents.started));
  try {
    const data = await API.event.getEvents();
    dispatch(generateSyncAction(types.event.getEvents.success, data));
  } catch (error) {
    dispatch(generateSyncAction(types.event.getEvents.failed, error));
  }
};

export default getEvents;
