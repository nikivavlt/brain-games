import gameLogic from '../src/index.js';

const rules = 'What number is missing in the progression?';

const round = () => {
  const firstNumber = Math.round(Math.random() * 100);
  const randomNumber = Math.round(Math.random() * 100);

  const progression = [];
  progression[0] = firstNumber;

  for (let i = 1; i < 10; i += 1) {
    progression.push(progression[i - 1] + randomNumber);
  }

  const randomIndex = Math.floor(Math.random() * progression.length);
  const answerNumber = progression[randomIndex];
  progression[randomIndex] = '..';

  return [progression.join(' '), answerNumber];
};

const startBrainProgression = () => gameLogic(rules, round);

export default startBrainProgression;
