import produce from 'immer';

const INITIAL_STATE = {
  points: null,
  ranking: [],
};

export default function points(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@score/GET_USER_POINTS_REQUEST':
      return produce(state, (draft) => {});
    case '@score/GET_USER_POINTS_SUCCESS':
      return produce(state, (draft) => {
        draft.points = action.payload.points;
      });
    case '@score/GET_USER_POINTS_FAILURE':
      return produce(state, (draft) => {});
    default:
      return state;
  }
}
