// Constants 
import { 
  MOVE_CLOCKWISE,
  MOVE_COUNTER_CLOCKWISE,
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

const initialQuizState = null
function quiz(state = initialQuizState, action) {
  return state
}

const initialSelectedAnswerState = null
function selectedAnswer(state = initialSelectedAnswerState, action) {
  return state
}

const initialMessageState = ''
function infoMessage(state = initialMessageState, action) {
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
