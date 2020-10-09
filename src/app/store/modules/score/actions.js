export function getRankingRequest() {
  return {
    type: '@score/GET_RANKING_REQUEST',
    payload: {},
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

export function getUserPointsSuccess(points, ranking) {
  return {
    type: '@score/GET_USER_POINTS_SUCCESS',
    payload: {
      points,
      ranking,
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

export function listUserAnswersRequest() {
  return {
    type: '@score/LIST_ANSWERS_REQUEST',
    payload: {},
  };
}

export function listUserAnswersSuccess(userAnswerList) {
  return {
    type: '@score/LIST_ANSWERS_SUCCESS',
    payload: {
      userAnswerList,
    },
  };
}

export function listUserAnswersFailure() {
  return {
    type: '@score/LIST_ANSWERS_FAILURE',
  };
}
