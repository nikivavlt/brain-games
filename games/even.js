import gameLogic from '../src/index.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

const round = () => {
  const randomNumber = Math.round(Math.random() * 100);
  const isEven = randomNumber % 2 === 0 ? 'yes' : 'no';
  return [randomNumber, isEven];
};

const startBrainEven = () => gameLogic(rules, round);

export default startBrainEven;
