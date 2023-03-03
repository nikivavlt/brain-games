import readlineSync from 'readline-sync';

export default (gameData) => {
  console.log(`\n${gameData.playerName}, ${gameData.rules}`);

  const numberOfRounds = 3;

  for (let i = 0; i < numberOfRounds; i += 1) {
    const [roundQuestion, correctAnswer] = gameData.generateRound();
    console.log(`Question: ${roundQuestion}`, '\x1b[31m');
    console.log(`Answer (for tests): ${correctAnswer}`, '\x1b[0m');
    const playerAnswer = readlineSync.question('Your answer: ');

    if (String(correctAnswer) !== playerAnswer) {
      console.log(`'${playerAnswer}' is wrong answer. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${gameData.playerName}!`);
      return;
    } console.log('Correct answer!\n');
  }
  console.log(`Congratulations, ${gameData.playerName}. You won!`);
};
