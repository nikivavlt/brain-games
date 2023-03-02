import readlineSync from 'readline-sync';

export default (playerName, gameRules, gameQuestionAnswer) => {
  console.log(`\n${playerName}, ${gameRules}`);

  for (let i = 0; i < 3; i += 1) {
    const [question, answer] = gameQuestionAnswer();
    console.log(`Question: ${question}`);
    const playerAnswer = readlineSync.question('Your answer: ');

    if (String(answer) !== playerAnswer) {
      return console.log(`'${playerAnswer}' is wrong answer. Correct answer was '${answer}'. Let's try again, ${playerName}!`);
    } console.log('Correct answer!');
  }
  return console.log(`Congratulations, ${playerName}. You won!`);
};
