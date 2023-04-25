import React from 'react'
import { connect } from 'react-redux'
import {inputChange, postQuiz} from '../state/action-creators'
// Initial Commit
export function Form(props) {

  const { newQuestion, newTrueAnswer, newFalseAnswer } = props

  const onChange = evt => {
    const { id, value } = evt.target
    props.inputChange(id, value)
  }

  const onSubmit = (evt, question, trueAnswer, falseAnswer) => {
    evt.preventDefault()
    props.postQuiz(question, trueAnswer, falseAnswer)
  }
  // trim whitespace from input before checking if it's empty
  const disabled = newQuestion.trim() === '' || newTrueAnswer.trim() === '' || newFalseAnswer.trim() === '' ? true : false

  return (
    <form id="form" onSubmit={(evt) => onSubmit(evt, newQuestion, newTrueAnswer, newFalseAnswer)}>
      <h2>Create New Quiz</h2>
      <input maxLength={50} onChange={evt => onChange(evt)} id="newQuestion" placeholder="Enter question" value={newQuestion} />
      <input maxLength={50} onChange={evt => onChange(evt)} id="newTrueAnswer" placeholder="Enter true answer" value={newTrueAnswer}/>
      <input maxLength={50} onChange={evt => onChange(evt)} id="newFalseAnswer" placeholder="Enter false answer" value={newFalseAnswer}/>
      <button id="submitNewQuizBtn" disabled={disabled}>Submit new quiz</button>
    </form>
  )
}

const mapStateToProps = (state) => {
  return {
    newQuestion: state.form.newQuestion,
    newTrueAnswer: state.form.newTrueAnswer,
    newFalseAnswer: state.form.newFalseAnswer
  }
}

export default connect(mapStateToProps, {inputChange, postQuiz})(Form)
