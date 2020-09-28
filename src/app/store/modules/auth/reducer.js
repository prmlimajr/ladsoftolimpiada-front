import produce from 'immer';

const INITIAL_STATE = {
  token: null,
  isSigned: false,
  loading: false,
};

export default function auth(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@auth/SIGN_IN_REQUEST':
      return produce(state, (draft) => {
        draft.loading = true;
      });
    case '@auth/SIGN_IN_SUCCESS':
      return produce(state, (draft) => {
        draft.token = action.payload.token;
        draft.isSigned = true;
        draft.loading = false;
      });
    case '@auth/SIGN_IN_FAILURE':
      return produce(state, (draft) => {
        draft.loading = false;
      });
    default:
      return state;
  }
}