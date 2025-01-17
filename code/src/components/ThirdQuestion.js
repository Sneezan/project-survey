import React from 'react';
import ProgressBar from './ProgressBar';

const barData = [
  { bgcolor: '#b62e88', completed: 42 }
];

const ThirdQuestion = ({
  frequencyInput,
  onFrequencyInputChange,
  onPreviousQuestionChange,
  onNextQuestionChange
}) => {
  const frequencyGroup = ['<1/day ', '1/day ', '2/day', '>2/day']

  return (
    <form className="question-wrap">
      <div className="progressbar">
        {barData.map((item, idx) => (
          <ProgressBar key={idx} bgcolor={item.bgcolor} completed={item.completed} />
        ))}
      </div>
      <div className="question">
        <p className="question-title">How often do you brush?</p>
        <p className="question-specify">(go on, you can be honest)</p>
      </div>
      {frequencyGroup.map((group) => (
        <label className="radio-label" htmlFor="frequency-id" key={group}>
          <input
            className="radio-input"
            type="radio"
            value={group}
            onChange={onFrequencyInputChange}
            checked={frequencyInput === group} />
          {group}
        </label>
      ))}

      <div className="button-container">
        <button type="button" className="back" onClick={onPreviousQuestionChange}>
          BACK
        </button>
        <button type="button" className="forward" onClick={onNextQuestionChange}>
        NEXT
        </button>
      </div>
    </form>
  )
}
export default ThirdQuestion