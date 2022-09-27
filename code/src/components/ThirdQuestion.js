import React from 'react';

const ThirdQuestion = ({
  frequencyInput,
  onFrequencyInputChange,
  onPreviousQuestionChange,
  onNextQuestionChange
}) => {
  const frequencyGroup = ['<1/day ', '1/day ', '2/day', '>2/day']

  return (
    <form>
      <div className="question">
       How often do you brush your teeth on average?
        <p>(go on, you can be honest)</p>
      </div>
      {frequencyGroup.map((group) => (
        <label className="radio-label" htmlFor="frequency-id" key={group}>
          <input
            className="input"
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
          FORWARD
        </button>
      </div>
    </form>
  )
}
export default ThirdQuestion