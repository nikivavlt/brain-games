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
  const numberOne = Math.round(Math.random() * 100);
  const numberTwo = Math.round(Math.random() * 100);
  return [`${numberOne} ${numberTwo}`, isGCD(numberOne, numberTwo)];
};

const startBrainGCD = () => gameLogic(rules, round);

export default startBrainGCD;
