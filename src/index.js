import readlineSync from 'readline-sync';
import greetUser from './greetUser.js';
import tasksOfGames from './tasksOfGames.js';
import correctAnswerWas from './correctAnswerWas.js';

function playGame(gameFunction) {
  const userName = readlineSync.question('May I have your name? ');
  greetUser(userName);
  console.log(tasksOfGames[gameFunction.name]);

  let gameRoundsCout = 0;
  const numberForWin = 3;
  while (gameRoundsCout !== numberForWin) {
    const getGameData = gameFunction();

    const answer = readlineSync.question(`Question: ${getGameData.question} \n`);
    console.log(`Your answer: ${answer}`);

    if (answer === getGameData.rightAnswer) {
      console.log('Correct!\n');
      gameRoundsCout += 1;
    } else {
      return console.log(`${answer} is wrong answer ;(.
        Correct answer was ${correctAnswerWas(gameFunction.name, getGameData.rightAnswer)}.
        Let's try again, ${userName}!`);
    }
  } return console.log(`Congratulations, ${userName}!`);
}

export default playGame;
