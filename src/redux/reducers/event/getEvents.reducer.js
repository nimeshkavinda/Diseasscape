import types from "../../types";

export const getEvents = (
  state = { fetching: false, error: false },
  action
) => {
  switch (action.type) {
    case types.event.getEvents.started:
      return Object.assign({}, { fetching: true });

    case types.event.getEvents.success:
      return Object.assign({}, { fetching: false, data: { ...action.data } });

    case types.event.getEvents.failed:
      return Object.assign({}, { fetching: false, error: { ...action.data } });

    default:
      return state;
  }
};

export default getEvents;
