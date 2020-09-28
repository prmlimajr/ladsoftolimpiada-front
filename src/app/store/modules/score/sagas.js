import { takeLatest, call, put, all } from 'redux-saga/effects';

import Api from '../../../services/api';

import { getUserPointsSuccess, getUserPointsFailure } from './actions';

export function* getUserPoints({ payload }) {
  try {
    const { id } = payload;

    const response = yield call(Api.get, `score/${id}`);

    const { points } = response.data[0];

    yield put(getUserPointsSuccess(points));
  } catch (err) {
    yield put(getUserPointsFailure());
  }
}

export default all([
  takeLatest('@score/GET_USER_POINTS_REQUEST', getUserPoints),
]);
