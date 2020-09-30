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

    const { points } = response.data[0];

    yield put(getUserPointsSuccess(points));
  } catch (err) {
    yield put(getUserPointsFailure());
  }
}

export function* answerQuestion({ payload }) {
  try {
    const { userId, challengeId, answer } = payload;

    const response = yield call(Api.get, `score/${userId}`);
    const previousPoints = response.data[0].points;
    console.log('previours', previousPoints);

    const newPoints = yield call(Api.post, `answer/${challengeId}`, { answer });
    const score = newPoints.data[0];
    console.log(score);

    const newResponse = yield call(Api.get, `score/${userId}`);
    const updatedPoints = newResponse.data[0].points;

    if (score > previousPoints) {
      console.log('caiu aqui');
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
