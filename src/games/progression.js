/* eslint-disable no-confusing-arrow */
import gameLogic from '../main-logic.js';
import { getRandomNumber } from '../tools.js';

const rules = 'what number is missing in the progression?';

const generateRound = () => {
  const firstNumber = getRandomNumber();
  const randomNumber = getRandomNumber();

  const progression = [];
  progression[0] = firstNumber;

  for (let i = 1; i < 10; i += 1) {
    progression.push(progression[i - 1] + randomNumber);
  }

  const randomIndex = getRandomNumber(progression.length - 1);
  const answerNumber = progression[randomIndex];

  const editedProgression = progression
    .map((number) => (progression.indexOf(number) === progression.indexOf(answerNumber)) ? '...' : number)
    .join(' ');

  return [editedProgression, answerNumber];
};

const startBrainProgression = (playerName) => gameLogic({ playerName, rules, generateRound });

export default startBrainProgression;
