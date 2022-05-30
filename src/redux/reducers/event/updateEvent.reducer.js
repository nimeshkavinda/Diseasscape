import types from "../../types";

export const updateEvent = (
  state = { fetching: false, error: false },
  action
) => {
  switch (action.type) {
    case types.event.updateEvent.started:
      return Object.assign({}, { fetching: true });

    case types.event.updateEvent.success:
      return Object.assign({}, { fetching: false, data: { ...action.data } });

    case types.event.updateEvent.failed:
      return Object.assign({}, { fetching: false, error: { ...action.data } });

    default:
      return state;
  }
};

export default updateEvent;
