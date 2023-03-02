import { getRandomNumber } from '../tools.js';
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
  const numberOne = getRandomNumber();
  const numberTwo = getRandomNumber();
  const randomOperator = createOperator();
  const gameQuestion = `${numberOne} ${randomOperator} ${numberTwo}`;

  return [gameQuestion, countAnswer(numberOne, numberTwo, randomOperator)];
};

const startBrainCalc = (playerName) => gameLogic(playerName, rules, round);

export default startBrainCalc;
