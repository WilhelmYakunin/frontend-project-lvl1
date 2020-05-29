import readlineSync from 'readline-sync';
import randomNum from './randomNum.js';

const ariphmeticProgression = (name) => {
  const rule = 'What number is missing in the progression?';
  console.log(rule);

  let circle = 0; // establish a zero cicle =>
  // if an answer would be rigth this number will increase
  // if an answer would be wrong this number will decrease to 0

  while (circle !== 3) {
    // make a number that will progress the progression sequence
    const progression = randomNum(1, 10);

    // formulating an expression staffed with ariphmetic progression
    // first initialize a first element in the array
    const progressionArray = [randomNum(-30, 30)];

    // make the array staffed with progression numbers
    for (let i = 1; i < 10; i += 1) {
      const nextNum = progressionArray[(i - 1)] + progression;
      progressionArray.push(nextNum);
    }

    // defin the rigth answer through a random number
    const guessIndex = randomNum(1, 10);
    const rightAnswer = progressionArray[guessIndex];

    // assign progression array to a string
    const progressionString = progressionArray.toString();
    const progressionForUser = progressionString.replace(rightAnswer, '..').replace(/,/g, ' ');

    // assing down the user's answer
    const answer = readlineSync.question(`Question: ${progressionForUser} \n`);
    console.log(`Your answer: ${answer}`);

    // make cicle for checking/rejecting the rigthness of user's answer
    if (Number(answer) === rightAnswer) {
      console.log('Correct!\n');
      circle += 1;
    } else {
      console.log(`${answer} is wrong answer ;(. 
          Correct answer was ${rightAnswer}.
          Let's try again, ${name}!`);
      circle = 0;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export default ariphmeticProgression;
