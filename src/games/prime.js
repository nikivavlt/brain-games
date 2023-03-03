import { getRandomNumber } from '../tools.js';
import gameLogic from '../main-logic.js';

const rules = 'answer "yes" if given number is prime, otherwise answer "no".';

const isPrime = (number) => {
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) return false;
  }
  return true;
};

const generateRound = () => {
  const randomNumber = getRandomNumber();
  return [randomNumber, isPrime(randomNumber) ? 'yes' : 'no'];
};

const startBrainPrime = (playerName) => gameLogic({ playerName, rules, generateRound });

export default startBrainPrime;
