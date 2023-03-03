import { getRandomNumber } from '../tools.js';
import gameLogic from '../main-logic.js';

const rules = 'what is the result of the expression?';

const countAnswer = (numberOne, numberTwo, randomOperator) => {
  switch (randomOperator) {
    case '*':
      return numberOne * numberTwo;
    case '+':
      return numberOne + numberTwo;
    case '-':
      return numberOne - numberTwo;
    default:
      throw new Error(`Undefined operator: ${randomOperator}`);
  }
};

const generateRound = () => {
  const operators = ['*', '+', '-'];

  const numberOne = getRandomNumber();
  const numberTwo = getRandomNumber();
  const randomOperator = operators[getRandomNumber(operators.length - 1)];

  const gameQuestion = `${numberOne} ${randomOperator} ${numberTwo}`;

  return [gameQuestion, countAnswer(numberOne, numberTwo, randomOperator)];
};

const startBrainCalc = (playerName) => gameLogic({ playerName, rules, generateRound });

export default startBrainCalc;
