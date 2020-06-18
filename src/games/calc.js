import getRandomNum from '../getRandomNum.js';
const MIN_NUMBER_CALC = 1;
const MAX_NUMBER_CALC = 50;

function getCalc() {
  const quiz = 'What is the result of the expression?';
  const operand1 = getRandomNum(MIN_NUMBER_CALC, MAX_NUMBER_CALC);
  const operand2 = getRandomNum(MIN_NUMBER_CALC, MAX_NUMBER_CALC);

  const mathOperands = ['+', '-', '*'];
  const operator = mathOperands[getRandomNum(0, mathOperands.length - 1)];

  const question = `${operand1}${operator}${operand2}`;

  const operations = {
    '+': (x, y) => x + y,
    '-': (x, y) => x - y,
    '*': (x, y) => x * y,
  };

  const correctAnswer = operations[operator](operand1, operand2).toString();

  return { quiz, question, correctAnswer };
}

export default getCalc;
