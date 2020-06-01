import greeting from '../src/greeting.js';
import name from '../src/getName.js';

const game = (gamePlay) => {
  greeting(name);

  console.log(gamePlay().rule);

  let cicle = 0;

  do {
    // for each loop cickle we make a state of data of the game:
    // question statement and data for checking user's answer
    const getGameData = gamePlay().setGameData();

    // get the ueser's answer clear for him
    const answer = gamePlay().getAnswer(getGameData.question);
    console.log(`Your answer: ${answer}`);

    // checking if the user is not wrong: just booleans
    const answerCheck = gamePlay().answerCheck(answer, getGameData.right);

    // make the correct answer to show the user
    const correctAnswer = gamePlay().getCorrectAnswer(getGameData.right);

    // procceding all the data through the all the games loop
    if (answerCheck) {
      console.log('Correct!\n');
      cicle += 1;
    } else {
      console.log(`${answer} is wrong answer ;(. 
        Correct answer was ${correctAnswer}.
        Let's try again, ${name}!`);
      cicle = 0;
    }
  } while (cicle !== 3);
  console.log(`Congratulations, ${name}!`);
};

export default game;
