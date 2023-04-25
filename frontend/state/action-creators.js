import axios from 'axios';

// constants for action types
export const MOVE_CLOCKWISE = 'MOVE_CLOCKWISE';
export const MOVE_COUNTER_CLOCKWISE = 'MOVE_COUNTER_CLOCKWISE';
export const SELECT_ANSWER = 'SELECT_ANSWER';
export const FETCH_QUIZ = 'FETCH_QUIZ';
export const SET_QUIZ = 'SET_QUIZ';
export const FETCH_QUIZ_FAILURE = 'FETCH_QUIZ_FAILURE';
export const SET_MESSAGE = 'SET_MESSAGE';


// ❗ You don't need to add extra action creators to achieve MVP
export function moveClockwise() {
  return {
    type: MOVE_CLOCKWISE
  }
 }

export function moveCounterClockwise() {
  return {
    type: MOVE_COUNTER_CLOCKWISE
  }
 }

export function selectAnswer(id) {
  return {
    type: SELECT_ANSWER,
    payload: id
  }
 }

export function setMessage(message) {
  return {
    type: SET_MESSAGE, payload: message
  }
 }

export function setQuiz() {
  return {
    type: SET_QUIZ
  }
 }

export function inputChange() { }

export function resetForm() { }

// ❗ Async action creators
export function fetchQuiz() {
  return function (dispatch) {
    // First, dispatch an action to reset the quiz state (so the "Loading next quiz..." message can display)
    // On successful GET:
    // - Dispatch an action to send the obtained quiz to its state
    const url = 'http://localhost:9000/api/quiz/next';
    dispatch({type: FETCH_QUIZ});
    axios.get(url)
      .then(res => {
        console.log(res.data)
        dispatch({type: SET_QUIZ, payload: res.data});
      })
      .catch(err => {
        dispatch({type: FETCH_QUIZ_FAILURE, payload: err.message});
      });
  }
}
export function postAnswer(quiz, answer) {
  return function (dispatch) {
    // On successful POST:
    // - Dispatch an action to reset the selected answer state
    // - Dispatch an action to set the server message to state
    // - Dispatch the fetching of the next quiz
    axios.post('http://localhost:9000/api/quiz/answer', {quiz_id: quiz , answer_id: answer})
      .then(res => {
        dispatch({type: SELECT_ANSWER, payload: null});
        dispatch({type: SET_MESSAGE, payload: res.data.message});
        dispatch(fetchQuiz());
      })
  }
}
export function postQuiz() {
  return function (dispatch) {
    // On successful POST:
    // - Dispatch the correct message to the the appropriate state
    // - Dispatch the resetting of the form
  }
}
// ❗ On promise rejections, use log statements or breakpoints, and put an appropriate error message in state
