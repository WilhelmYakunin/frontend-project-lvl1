import readlineSync from 'readline-sync';
import randomNum from '../src/randomNum.js';

const gcd = (name) => {
  const rule = 'Find the greatest common divisor of given numbers.';
  console.log(rule);

  let circle = 0; // establish a zero cicle =>
  // if an answer would be rigth this number will increase
  // if an answer would be wrong this number will decrease to 0

  while (circle !== 3) {
    const num1 = randomNum(-30, 30);
    // get a random number from -30 to 30 just for siplicity
    const num2 = randomNum(1, 30);
    // get a random number from 1 to 30 just for siplicity

    // formulating an expression consistiong of nums and sings randomly choosen
    const expressionToEval = `${num1.toString()} ${num2.toString()}`;

    // finding of divisors of each random nuber separetly
    const getOwnDivisors = (num) => {
      const ownDivisors = [];
      for (let i = 1; i <= num; i += 1) {
        if (num % i === 0) {
          ownDivisors.push(i);
        }
      } return ownDivisors;
    };

    // make constant that find the common devisors
    const getInt = (arr1, arr2) => arr1.filter((value) => arr2.includes(value));

    // form an array tath concludes common divisors in gradual-to-biggest-number order
    const intersection = getInt(getOwnDivisors(num1), getOwnDivisors(num2));

    // make an constant for checking the answer
    // by slicing down the last number, i.e. the biggest
    const evaluatedExpression = intersection[intersection.length - 1];

    // assing down the user's answer
    const answer = readlineSync.question(`Question: ${expressionToEval} \n`);
    console.log(`Your answer: ${answer}`);

    // make cicle for checking/rejecting the rigthness of user's answer
    if (Number(answer) === evaluatedExpression) {
      console.log('Correct!\n');
      circle += 1;
    } else {
      console.log(`${answer} is wrong answer ;(. 
          Correct answer was ${evaluatedExpression}.
          Let's try again, ${name}!`);
      circle = 0;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export default gcd;
