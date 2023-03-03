import { getRandomNumber } from '../tools.js';
import gameLogic from '../main-logic.js';

const rules = 'find the greatest common divisor of given numbers.';

const getGCD = (numberOne, numberTwo) => {
  if (numberTwo === 0) return numberOne;

  const numberThree = numberOne % numberTwo;
  return getGCD(numberTwo, numberThree);
};

const generateRound = () => {
  const numberOne = getRandomNumber();
  const numberTwo = getRandomNumber();
  return [`${numberOne} and ${numberTwo}`, getGCD(numberOne, numberTwo)];
};

const startBrainGCD = (playerName) => gameLogic({ playerName, rules, generateRound });

export default startBrainGCD;
