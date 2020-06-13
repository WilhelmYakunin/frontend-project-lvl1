import readlineSync from 'readline-sync';
import setDifficulty from './setDifficulty.js';

function playGame(setGame, task) {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Welcome to the Brain Games! \n
  Hello, ${userName}! \n`);
  console.log(task);
  const userSetDifficulty = readlineSync.question(`
    1. Easy: numbers from -30 to 30. \n
    2. Normal: numbers from -60 to 60. \n
    3. Hard: numbers from -100 to 100 \n`);
  const getDifficulty = setDifficulty(userSetDifficulty);

  let roundsCout = 0;
  const roundsToWin = 3;
  while (roundsCout !== roundsToWin) {
    const gameData = setGame(getDifficulty);

    const answer = readlineSync.question(`Question: ${gameData.question} \n`);
    console.log(`Your answer: ${answer}`);

    if (answer === gameData.rightAnswer) {
      console.log('Correct!\n');
      roundsCout += 1;
    } else {
      return console.log(`${answer} is wrong answer ;(.
        Correct answer was ${gameData.rightAnswer}.
        Let's try again, ${userName}!`);
    }
  } return console.log(`Congratulations, ${userName}!`);
}

export default playGame;
