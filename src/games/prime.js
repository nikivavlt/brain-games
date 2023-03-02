import gameLogic from '../main-logic.js';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  let i = 2;
  while (i < number) {
    if (number % i === 0) return 'no';
    i += 1;
  }
  return 'yes';
};

const round = () => {
  const randomNumber = Math.round(Math.random() * 100);
  return [randomNumber, isPrime(randomNumber)];
};

const startBrainPrime = () => gameLogic(rules, round);

export default startBrainPrime;
