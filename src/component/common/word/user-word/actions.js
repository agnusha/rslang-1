import {
  FETCH_USER_WORD_SUCCESS,
  FETCH_USER_WORD_REQUEST,
  FETCH_USER_WORD_FAIL,
} from './constants';

export function fetchUserWordsRequest() {
  return {
    type: FETCH_USER_WORD_REQUEST,
    payload: {
      isUserWordsLoading: true,
      isUserWordsError: false,
    },
  };
}

export function fetchUserWordsSuccess(words) {
  return {
    type: FETCH_USER_WORD_SUCCESS,
    payload: {
      isUserWordsLoading: false,
      words,
    },
  };
}

export function fetchUserWordsFail(error) {
  return {
    type: FETCH_USER_WORD_FAIL,
    payload: {
      isUserWordsLoading: false,
      isUserWordsError: true,
      error,
    },
  };
}
