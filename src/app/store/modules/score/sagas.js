import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import Api from '../../../services/api';

import {
  getUserPointsSuccess,
  getUserPointsFailure,
  answerQuestionFailure,
} from './actions';

export function* getUserPoints({ payload }) {
  console.log({ payload });
  try {
    const { id } = payload;

    const response = yield call(Api.get, `score/${id}`);
    console.log(response);
    const { points } = response.data;

    yield put(getUserPointsSuccess(points));
  } catch (err) {
    yield put(getUserPointsFailure());
  }
}

export function* answerQuestion({ payload }) {
  try {
    const { userId, challengeId, answer } = payload;

    const response = yield call(Api.get, `score/${userId}`);
    const previousPoints = response.data.points;
    console.log(previousPoints);

    const newPoints = yield call(Api.post, `answer/${challengeId}`, { answer });
    console.log('ssssssssssssssss', newPoints);
    const score = newPoints.data.point;
    console.log(score);

    const newResponse = yield call(Api.get, `score/${userId}`);
    const updatedPoints = newResponse.data.points;
    console.log(updatedPoints);

    if (score) {
      toast.success('Parabéns! Você acertou uma questão!');
    }

    yield put(getUserPointsSuccess(updatedPoints));
  } catch (err) {
    toast.error('Não foi possível responder esta questão');
    yield put(answerQuestionFailure());
  }
}
export default all([
  takeLatest('@score/GET_USER_POINTS_REQUEST', getUserPoints),
  takeLatest('@score/ANSWER_QUESTION_REQUEST', answerQuestion),
]);
