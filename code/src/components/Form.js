import React, { useState } from 'react';

import FirstQuestion from './FirstQuestion'
import SecondQuestion from './SecondQuestion'
import ThirdQuestion from './ThirdQuestion'
import FourthQuestion from './FourthQuestion'
import FifthQuestion from './FifthQuestion'
import SixthQuestion from './SixthQuestion'
import FirstPage from './FirstPage'

import 'index.css';

const Form = () => {
  //  const states
  const [counter, setCounter] = useState(0);
  const [nameInput, setNameInput] = useState('');
  const [brushInput, setBrushInput] = useState();
  const [frequencyInput, setFrequencyInput] = useState();
  const [checkboxGroup, setCheckboxGroup] = useState([]);
  const [goalInput, setGoalInput] = useState();
  const [flossInput, setFlossInput] = useState();

  //  functions
  const onNextQuestionChange = () => {
    setCounter(counter + 1)
  }

  const onPreviousQuestionChange = () => {
    setCounter(counter - 1)
  }

  const onNameInputChange = (event) => {
    setNameInput(event.target.value)
  }

  const onBrushInputChange = (event) => {
    setBrushInput(event.target.value)
  }

  const onFrequencyInputChange = (event) => {
    setFrequencyInput(event.target.value)
  }

  const onCheckboxGroupToggle = (checkboxValue) => {
    if (checkboxGroup.includes(checkboxValue)) {
      // delete element from array by using filter method
      setCheckboxGroup(checkboxGroup.filter((item) => item !== checkboxValue))
    } else {
      // opy all the values from the previous heckboxGroup array
      setCheckboxGroup([checkboxValue, ...checkboxGroup])
    }
  }

  const onFlossInputChange = (event) => {
    setFlossInput(event.target.value)
  }

  const onGoalInputChange = (event) => {
    setGoalInput(event.target.value)
  }

  // return question carousel
  return (
    <main className="main-contaniner">
      {counter === 0 && <FirstPage onNextQuestionChange={onNextQuestionChange} />}
      {counter === 1 && (
        <FirstQuestion
          nameInput={nameInput}
          onNameInputChange={onNameInputChange}
          onNextQuestionChange={onNextQuestionChange}
          onPreviousQuestionChange={onPreviousQuestionChange} />
      )}
      {counter === 2 && (
        <SecondQuestion
          brushInput={brushInput}
          onBrushInputChange={onBrushInputChange}
          onNextQuestionChange={onNextQuestionChange}
          onPreviousQuestionChange={onPreviousQuestionChange} />
      )}
      {counter === 3 && (
        <ThirdQuestion
          frequencyInput={frequencyInput}
          onFrequencyInputChange={onFrequencyInputChange}
          onNextQuestionChange={onNextQuestionChange}
          onPreviousQuestionChange={onPreviousQuestionChange} />
      )}
      {counter === 4 && (
        <FourthQuestion
          checkboxGroup={checkboxGroup}
          onChangeFunction={onCheckboxGroupToggle}
          onNextQuestionChange={onNextQuestionChange}
          onPreviousQuestionChange={onPreviousQuestionChange} />
      )}
      {counter === 5 && (
        <FifthQuestion
          flossInput={flossInput}
          onFlossInputChange={onFlossInputChange}
          onNextQuestionChange={onNextQuestionChange}
          onPreviousQuestionChange={onPreviousQuestionChange} />
      )}
      {counter === 6 && (
        <SixthQuestion
          goalInput={goalInput}
          onGoalInputChange={onGoalInputChange}
          onNextQuestionChange={onNextQuestionChange}
          onPreviousQuestionChange={onPreviousQuestionChange} />
      )}
    </main>
  );
}
export default Form