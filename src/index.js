import readlineSync from 'readline-sync';
import greeting from './greeting.js';
import name from './getName.js';
import gameRules from './gameRules.js';

const game = (gameFunction) => {
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

    // checking if the user is not wrong: just booleans is expected to be returned
    const answerCheck = () => answer === getGameData.right;

    // make a function answer to show the user if nessesary
    const correctAnswer = function correctAnswerWas() {
      if ((gameFunction.name === 'even') || (gameFunction.name === 'prime')) {
        return (getGameData.right === 'yes') ? 'yes' : 'no';
      } return getGameData.right;
    };

    // procceding all the data through the all the games loop
    if (answerCheck()) {
      console.log('Correct!\n');
      cicle += 1;
    } else {
      console.log(`${answer} is wrong answer ;(. 
        Correct answer was ${correctAnswer()}.
        Let's try again, ${name}!`);
      cicle = 0;
    }
  } while (cicle !== 3);
  console.log(`Congratulations, ${name}!`);
};

export default game;
