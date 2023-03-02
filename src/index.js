import { requestName, selectGameNumber } from './cli.js';
import startBrainEven from './games/even.js';
import startBrainCalc from './games/calc.js';
import startBrainGCD from './games/gcd.js';
import startBrainProgression from './games/progression.js';
import startBrainPrime from './games/prime.js';

export default () => {
  console.log('Welcome to the Brain Games!');

  const playerName = requestName();
  console.log(`Hey there, ${playerName}!`);

  while (true) {
    const selectedNumber = selectGameNumber();

    switch (selectedNumber) {
      case 0:
        startBrainEven(playerName);
        break;
      case 1:
        startBrainCalc(playerName);
        break;
      case 2:
        startBrainGCD(playerName);
        break;
      case 3:
        startBrainProgression(playerName);
        break;
      case 4:
        startBrainPrime(playerName);
        break;
      case 5:
        return false;
      default:
        throw new Error(`Wrong number selected: ${selectedNumber}`);
    }
  }
};
