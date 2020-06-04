import readlineSync from 'readline-sync';
import greeting from './greeting.js';
import name from './getName.js';
import gameRules from './gameRules.js';
import correctAnswerWas from './correctAnswerWas.js';

function game(gameFunction) {
  greeting(name);
  console.log(gameRules[gameFunction.name]);

  let cicle = 0;
  do {
    // for each loop cickle we make a state of data of the game:
    // question statement and data for checking user's answer
    const getGameData = gameFunction();

    // get the ueser's answer clear for him and for this machine
    const answer = readlineSync.question(`Question: ${getGameData.question} \n`);
    console.log(`Your answer: ${answer}`);

    // procceding all the data through the all the games loop
    // at first: check the user's answer
    if (answer === getGameData.right) {
      console.log('Correct!\n');
      cicle += 1;
    } else {
      // show user the right answer in case of wrong answer
      console.log(`${answer} is wrong answer ;(.
        Correct answer was ${correctAnswerWas(gameFunction.name, getGameData.right)}.
        Let's try again, ${name}!`);
      cicle = 0;
    }
  } while (cicle !== 3);
  console.log(`Congratulations, ${name}!`);
}

export default game;
