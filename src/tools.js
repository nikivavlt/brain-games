import readlineSync from 'readline-sync';

const requestName = () => readlineSync.question('May I have your name? ');

const selectGameNumber = () => {
  console.log('\nEnter the number of the game you want to play: ');

  console.log(`0. Brain even - you should answer is the number even or no.
1. Brain calc - you should calculate the result of the expression.
2. Brain gcd - you should find the greatest common divisor of given numbers.
3. Brain progression - you should find the number, which is missing in the progression.
4. Brain prime - you should answer is the number prime or no.
5. Exit application`);

  return Number(readlineSync.question(''));
};

const getRandomNumber = () => Math.round(Math.random() * 100);

export {
  requestName,
  selectGameNumber,
  getRandomNumber,
};
