import readlineSync from 'readline-sync';

const gameLogic = (gameRules, gameQuestionAnswer) => {
  console.log('Welcome to the Brain Games!');
  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}!`);
  console.log(gameRules);

  for (let i = 0; i < 3; i += 1) {
    const [question, answer] = gameQuestionAnswer();
    console.log(`Question: ${question}`);
    const playerAnswer = readlineSync.question('Your answer: ');
    if (String(answer) !== String(playerAnswer)) {
      return console.log(`'${playerAnswer}' is wrong answer ;(. Correct answer was '${answer}'.\nLet's try again, ${playerName}!`);
    } console.log('Correct!');
  }
  return console.log(`Congratulations, ${playerName}!`);
};

export default gameLogic;
