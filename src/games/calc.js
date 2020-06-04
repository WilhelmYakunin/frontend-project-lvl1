import randomNum from '../randomNum.js';

function calc() {
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
  const right = arrOfFunction[quantyfire](num1, num2).toString();

  return { question, right };
}

export default calc;
