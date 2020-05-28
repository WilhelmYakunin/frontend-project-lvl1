#! node --experimental-modules

import readlineSync from 'readline-sync';

const rangeNum = () => Math.floor(Math.random() * (100 - 1 + 1)) + 1;

const brainEven = (name) => {
  const rule = 'Answer "yes" if the number is even, otherwise answer "no".';
  console.log(rule);

  let circle = 0;

  while (circle !== 3) {
    const num = rangeNum();
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
