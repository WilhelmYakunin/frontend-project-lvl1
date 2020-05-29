import readlineSync from 'readline-sync';
import randomNum from '../src/randomNum.js';

const brainEven = (name) => {
  const rule = 'Answer "yes" if the number is even, otherwise answer "no".';
  console.log(rule);

  let circle = 0; // establish a zero cicle =>
  // if an answer would be rigth this number will increase
  // if an answer would be wrong this number will decrease to 0

  while (circle !== 3) {
    const num = randomNum(1, 100); // get a random number from 1 to 100
    const answer = readlineSync.question(`Question: ${num} \n`);
    console.log(`Your answer: ${answer}`);
    const answerSwitch = (answer === 'yes') ? 'no' : 'yes';
    const isEven = (num % 2 === 0);

    if ((isEven && (answer === 'yes')) || (!isEven && (answer === 'no'))) {
      console.log('Correct!\n');
      circle += 1;
    } else {
      console.log(`${answer} is wrong answer ;(. 
        Correct answer was ${answerSwitch}.
        Let's try again, ${name}!`);
      circle = 0;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export default brainEven;
