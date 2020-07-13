import React from 'react';

const RadioGroup = ({ no, handleChange, answers }) => {
  return (
    <div>
      {answers.map((answer, idx) => (
        <div key={`${idx}`}>
          <input
            type='radio'
            id={answer}
            name={no}
            value={idx}
            onChange={handleChange}
            required
          />
          <label htmlFor={idx}>{answer}</label>
        </div>
      ))}
    </div>
  );
};
export default RadioGroup;
