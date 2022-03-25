import types from "../../types";

export const createEvent = (
  state = { fetching: false, error: false },
  action
) => {
  switch (action.type) {
    case types.event.createEvent.started:
      return Object.assign({}, { fetching: true });

    case types.event.createEvent.success:
      return Object.assign({}, { fetching: false, data: { ...action.data } });

    case types.event.createEvent.failed:
      return Object.assign({}, { fetching: false, error: { ...action.data } });

    default:
      return state;
  }
};

export default createEvent;
