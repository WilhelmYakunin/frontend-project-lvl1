import readlineSync from 'readline-sync';
import randomNum from '../src/randomNum.js';
import greeting from '../src/greeting.js';
import name from '../src/getName.js';

const game = (gameData) => {
  greeting(name);

  const { rule } = gameData;
  console.log(rule);

  let cicle = 0;

  do {
    const num = randomNum(1, 100); // get a random number from 1 to 100
    const answer = readlineSync.question(`Question: ${num} \n`);
    console.log(`Your answer: ${answer}`);

    const answerSwitch = (answer === 'yes') ? 'no' : 'yes';

    const answerCheck = gameData.rights(num);
    const rightAnswer = (answerCheck && (answer === 'yes'))
    || (!answerCheck && (answer === 'no'));

    if (rightAnswer) {
      console.log('Correct!\n');
      cicle += 1;
    } else {
      console.log(`${answer} is wrong answer ;(. 
        Correct answer was ${answerSwitch}.
        Let's try again, ${name}!`);
      cicle = 0;
    }
  } while (cicle !== 3);
  console.log(`Congratulations, ${name}!`);
};

export default game;
