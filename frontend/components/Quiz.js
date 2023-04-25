import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchQuiz, selectAnswer, postAnswer } from '../state/action-creators';


const Quiz = (props) => {
  const question = props.question;
  const answers = props.answers;
  const quiz_id = props.quiz_id;
  const selectedAnswer = props.selectedAnswer;

  useEffect(() => {
    if (!question) {
      props.fetchQuiz();
    }
  }, []);

  const selectAnswer = (answerID) => {
    props.selectAnswer(answerID);
  };

  const submitAnswer = (quiz_id, selectedAnswer) => {
    props.postAnswer(quiz_id, selectedAnswer);
  };

  const disabled = selectedAnswer === null ? true : false;

  return (
    <div id="wrapper">
      {
        // quiz already in state? Let's use that, otherwise render "Loading next quiz..."
        question ? (
          <>
            <h2>{question}</h2>

            <div id="quizAnswers">
              {answers.map((answer, index) => {
                const answerId = answer.answer_id;
                return (
                  <div className={`answer ${answerId === selectedAnswer ? 'selected' : null}`} key={index}>
                    {answer.text}
                    <button onClick={() => selectAnswer(answerId)}>
                      {answerId === selectedAnswer ? 'SELECTED' : 'Select'}
                    </button>
                  </div>
                )
              })}
            </div>

            <button onClick={() => submitAnswer(quiz_id, selectedAnswer)} id="submitAnswerBtn" disabled={disabled}>Submit answer</button>
          </>
        ) : 'Loading next quiz...'
      }
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    question: state.quiz.question,
    answers: state.quiz.answers,
    quiz_id: state.quiz.quiz_id,
    selectedAnswer: state.selectedAnswer.selectedAnswer
  }
}

export default connect(mapStateToProps, { fetchQuiz, selectAnswer, postAnswer })(Quiz);