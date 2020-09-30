export function getRankingRequest() {
  return {
    type: '@score/GET_RANKING_REQUEST',
  };
}

export function getRankingSuccess(ranking) {
  return {
    type: '@score/GET_RANKING_SUCCESS',
    payload: {
      ranking,
    },
  };
}

export function getRankingFailure() {
  return {
    type: '@score/GET_RANKING_FAILURE',
  };
}

export function getUserPointsRequest(id) {
  return {
    type: '@score/GET_USER_POINTS_REQUEST',
    payload: {
      id,
    },
  };
}

export function getUserPointsSuccess(points) {
  return {
    type: '@score/GET_USER_POINTS_SUCCESS',
    payload: {
      points,
    },
  };
}

export function getUserPointsFailure() {
  return {
    type: '@score/GET_USER_POINTS_FAILURE',
  };
}

export function answerQuestionRequest(data) {
  return {
    type: '@score/ANSWER_QUESTION_REQUEST',
    payload: {
      userId: data.userId,
      challengeId: data.challengeId,
      answer: data.answer,
    },
  };
}

export function answerQuestionFailure() {
  return {
    type: '@score/ANSWER_QUESTION_FAILURE',
  };
}
