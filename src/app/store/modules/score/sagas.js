import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import Api from '../../../services/api';

import {
  getUserPointsSuccess,
  getUserPointsFailure,
  answerQuestionFailure,
  getRankingSuccess,
} from './actions';

export function* getUserPoints({ payload }) {
  console.log('getUserPoints', payload);
  try {
    const { id } = payload;

    const rankingRequest = yield call(Api.get, 'score');
    const ranking = rankingRequest.data;

    const response = yield call(Api.get, `score/${id}`);

    const { points } = response.data;

    yield put(getUserPointsSuccess(points, ranking));
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
    } else {
      toast.error('Que pena. Você errou...');
    }

    yield put(getUserPointsSuccess(updatedPoints));
  } catch (err) {
    toast.error(
      'Não foi possível responder esta questão. Você pode já ter respondido ela antes.'
    );
    yield put(answerQuestionFailure());
  }
}

export function* getRanking({ payload }) {
  try {
    const rankingRequest = yield call(Api.get, 'ranking');
    const ranking = rankingRequest.data;

    yield put(getRankingSuccess(ranking));
  } catch (err) {}

  console.log('bateu aqui');
}

export default all([
  takeLatest('@score/GET_USER_POINTS_REQUEST', getUserPoints),
  takeLatest('@score/ANSWER_QUESTION_REQUEST', answerQuestion),
  takeLatest('@score/GET_RANKING_REQUEST', getRanking),
]);
