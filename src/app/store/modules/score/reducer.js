import produce from 'immer';

const INITIAL_STATE = {
  points: null,
  level: null,
  ranking: [],
};

const checkLevel = (points) => {
  if (points < 6) {
    return 1;
  } else if (points >= 6 && points < 14) {
    return 2;
  } else {
    return 3;
  }
};

export default function points(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@score/GET_USER_POINTS_REQUEST':
      return produce(state, (draft) => {});
    case '@score/GET_USER_POINTS_SUCCESS':
      return produce(state, (draft) => {
        draft.points = action.payload.points;
        draft.level = checkLevel(action.payload.points);
        // draft.ranking = action.payload.ranking;
      });
    case '@score/GET_USER_POINTS_FAILURE':
      return produce(state, (draft) => {});
    case '@score/GET_RANKING_SUCCESS':
      return produce(state, (draft) => {
        draft.ranking = action.payload.ranking;
      });
    default:
      return state;
  }
}
