import readlineSync from 'readline-sync';
import randomNum from '../src/randomNum.js';

const gcdGamePlay = function gcd() {
  return {
    rule: 'Find the greatest common divisor of given numbers.',
    setGameData() {
      // get a random number from -30 to 30
      const num1 = randomNum(-30, 30);

      // get a random number from 1 to 30
      const num2 = randomNum(1, 30);

      // formulating an expression consistiong of nums and sings randomly choosen
      const question = `${num1.toString()} ${num2.toString()}`;

      // finding of the divisors of each random nuber separetly
      const getOwnDivisors = (num) => [...Array(num + 1).keys()].slice(1)
        .filter((iter) => num % iter === 0);

      // make constant that find the common devisors
      const getInt = (arr1, arr2) => arr1.filter((value) => arr2.includes(value));

      // form an array tath concludes common divisors in gradual-to-biggest-number order
      const intersection = getInt(getOwnDivisors(num1), getOwnDivisors(num2));

      // make an constant for checking the answer
      // by slicing down the last number, i.e. the biggest
      const right = intersection[intersection.length - 1];

      return { question, right };
    },
    // get user's answer
    getAnswer(question) {
      return readlineSync.question(`Question: ${question} \n`);
    },
    // get correctAnswer for put in the game do-while loop
    getCorrectAnswer(right) {
      return right;
    },
    // checking if user was wrong with the answer
    answerCheck(answer, right) { return Number(answer) === right; },
  };
};

export default gcdGamePlay;
