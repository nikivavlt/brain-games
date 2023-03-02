import { getRandomNumber } from '../tools.js';
import gameLogic from '../main-logic.js';

const rules = 'Find the greatest common divisor of given numbers.';

const isGCD = (numberOne, numberTwo) => {
  if (numberTwo !== 0) {
    const numberThree = numberOne % numberTwo;
    return isGCD(numberTwo, numberThree);
  }
  return numberOne;
};

const round = () => {
  const numberOne = getRandomNumber();
  const numberTwo = getRandomNumber();
  return [`${numberOne} ${numberTwo}`, isGCD(numberOne, numberTwo)];
};

const startBrainGCD = (playerName) => gameLogic(playerName, rules, round);

export default startBrainGCD;
