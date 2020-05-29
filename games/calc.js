import readlineSync from 'readline-sync';
import randomNum from '../src/randomNum.js';

const calc = (name) => {
  const rule = 'What is the result of the expression?';
  console.log(rule);

  let circle = 0; // establish a zero cicle =>
  // if an answer would be rigth this number will increase
  // if an answer would be wrong this number will decrease to 0

  while (circle !== 3) {
    // get a random number from -30 to 30 just for simplicity
    const num1 = randomNum(-30, 30);

    // get a random number from 1 to 30 just for simplicity
    const num2 = randomNum(1, 30);

    // array of the mathematic signs
    const arrOfquatyfires = ['+', '-', '*'];

    // randomly choose a sign
    const quantyfire = arrOfquatyfires[randomNum(0, 2)];

    // formulating an expression consistiong of nums and sings randomly choosen
    const expressionToEval = `${num1.toString()} ${quantyfire} ${num2.toString()}`;

    // make function for sings of mathematic operators
    const arrOfFunction = {
      '+': function plus(x, y) { return x + y; },
      '-': function minus(x, y) { return x - y; },
      '*': function multiply(x, y) { return x * y; },
    };

    // evaluated expression is the right answer
    const evaluatedExpression = arrOfFunction[quantyfire](num1, num2);

    // get an answer from user
    const answer = readlineSync.question(`Question: ${expressionToEval} \n`);
    console.log(`Your answer: ${answer}`);

    // starting the cickle of answering
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

export default calc;
