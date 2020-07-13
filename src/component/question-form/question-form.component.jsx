import React, { useState } from 'react';
import RadioGroup from '../radio-group/radio-group.component';
import myQuestions from './questions.js';
const QuestionForm = () => {
  const [answers, setItem] = useState(null);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setItem({ ...answers, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
  };

  const checkAnswer = () => {
    console.log(myQuestions);
    //check exist of answer and number of question === answer
    if (answers && myQuestions.length === Object.keys(answers).length) {
      const checkArray = myQuestions.map((detail, idx) => {
        return `No: ${idx + 1} ${
          Number(detail.correctAnswer) === Number(answers[idx])
        } \n`;
      });
      alert(checkArray);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {myQuestions.map((question, idx) => (
          <div key={idx}>
            <h1>{`${idx + 1}) ${question.question}`}</h1>
            <RadioGroup
              key={idx}
              no={idx}
              answers={question.answers}
              handleChange={handleChange}
            />
          </div>
        ))}
        <button
          type='submit'
          className='modal-buttom'
          onClick={() => checkAnswer()}
        >
          Submit
        </button>
      </form>
    </div>
  );
};
export default QuestionForm;
