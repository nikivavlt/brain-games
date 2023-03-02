import gameLogic from '../main-logic.js';

const rules = 'What is the result of the expression?';

const createOperator = () => {
  const operator = ['*', '+', '-'];
  return operator[Math.floor(Math.random() * operator.length)];
};

const countAnswer = (numberOne, numberTwo, randomOperator) => {
  if (randomOperator === '*') return numberOne * numberTwo;
  if (randomOperator === '+') return numberOne + numberTwo;
  return numberOne - numberTwo;
};

const round = () => {
  const numberOne = Math.round(Math.random() * 100);
  const numberTwo = Math.round(Math.random() * 100);
  const randomOperator = createOperator();
  const gameQuestion = `${numberOne} ${randomOperator} ${numberTwo}`;

  return [gameQuestion, countAnswer(numberOne, numberTwo, randomOperator)];
};

const startBrainCalc = () => gameLogic(rules, round);

export default startBrainCalc;
