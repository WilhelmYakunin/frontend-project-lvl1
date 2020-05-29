import readlineSync from 'readline-sync';
import randomNum from '../src/randomNum.js';

const brainPrime = (name) => {
  const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  console.log(rule);

  let circle = 0; // establish a zero cicle =>
  // if an answer would be rigth this number will increase
  // if an answer would be wrong this number will decrease to 0

  while (circle !== 3) {
    const num = randomNum(1, 100); // get a random number from 1 to 100
    const answer = readlineSync.question(`Question: ${num} \n`);
    console.log(`Your answer: ${answer}`);
    const answerSwitch = (answer === 'yes') ? 'no' : 'yes';

    const isPrime = () => {
      for (let i = 2; i < num; i += 1) {
        if (num % i === 0) {
          return false;
        }
      }

      return true;
    };

    if ((isPrime() && (answer === 'yes')) || (!isPrime() && (answer === 'no'))) {
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

export default brainPrime;
