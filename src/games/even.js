import { getRandomNumber } from '../tools.js';
import gameLogic from '../main-logic.js';

const rules = 'answer "yes" if the number is even, otherwise answer "no".';

const round = () => {
  const randomNumber = getRandomNumber();
  const isEven = randomNumber % 2 === 0 ? 'yes' : 'no';
  return [randomNumber, isEven];
};

const startBrainEven = (playerName) => gameLogic(playerName, rules, round);

export default startBrainEven;
