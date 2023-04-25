// Constants 
import { 
  MOVE_CLOCKWISE,
  MOVE_COUNTER_CLOCKWISE,
  FETCH_QUIZ,
  SET_QUIZ,
  FETCH_QUIZ_FAILURE,
  SELECT_ANSWER,
  SET_MESSAGE,
  } from './action-creators'

// ❗ You don't need to add extra reducers to achieve MVP
import { combineReducers } from 'redux'

const initialWheelState = {
  position: 0
}
function wheel(state = initialWheelState, action) {
  switch(action.type) {
    case MOVE_CLOCKWISE:
      return { ...state, position: (state.position === 0 ? 5 : state.position - 1) }
    case MOVE_COUNTER_CLOCKWISE:
      return { ...state, position: (state.position === 5 ? 0 : state.position + 1) }
  }
  return state
}

const initialQuizState = {
  question: '',
  answers: [],
  quiz_id: null,
}
function quiz(state = initialQuizState, action) {
  switch(action.type){
    case FETCH_QUIZ:
      return { ...state, question: null, answers: [], quiz_id: null}
    case SET_QUIZ:
      return { ...state, question: action.payload.question, answers: action.payload.answers, quiz_id: action.payload.quiz_id }
    case FETCH_QUIZ_FAILURE:
      return { ...state, question: '', answers: [], quiz_id: null }
  }
  return state
}

const initialSelectedAnswerState = {
  selectedAnswer: null
}
function selectedAnswer(state = initialSelectedAnswerState, action) {
  switch(action.type){
    case SELECT_ANSWER:
      return { ...state, selectedAnswer: action.payload}
  }
  return state
}

const initialMessageState = {
  message: ''
}
function infoMessage(state = initialMessageState, action) {
  switch(action.type){
    case SET_MESSAGE:
      return {...state, message: action.payload}
  }
  return state
}

const initialFormState = {
  newQuestion: '',
  newTrueAnswer: '',
  newFalseAnswer: '',
}
function form(state = initialFormState, action) {
  return state
}

export default combineReducers({ wheel, quiz, selectedAnswer, infoMessage, form })
