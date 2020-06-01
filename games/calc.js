import readlineSync from 'readline-sync';
import randomNum from '../src/randomNum.js';

const calcGamePlay = function calc() {
  return {
    rule: 'What is the result of the expression?',
    setGameData() {
      // get a random number from -30 to 30 just for simplicity
      const num1 = randomNum(-30, 30);

      // get a random number from 1 to 30 just for simplicity
      const num2 = randomNum(1, 30);

      // array of the mathematic signs
      const arrOfquatyfires = ['+', '-', '*'];

      // randomly choose a sign
      const quantyfire = arrOfquatyfires[randomNum(0, 2)];

      // formulating an expression consistiong of nums and sings randomly choosen
      const question = `${num1.toString()} ${quantyfire} ${num2.toString()}`;

      // make function for sings of mathematic operators
      const arrOfFunction = {
        '+': function plus(x, y) { return x + y; },
        '-': function minus(x, y) { return x - y; },
        '*': function multiply(x, y) { return x * y; },
      };

      // evaluated expression is the right answer
      const right = arrOfFunction[quantyfire](num1, num2);

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

export default calcGamePlay;
