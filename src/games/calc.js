import getRandomNum from '../getRandomNum.js';

const MIN_NUMBER = 1;
const MAX_NUMBER = 50;
const quiz = 'What is the result of the expression?';

function generateGameData() {
  const operand1 = getRandomNum(MIN_NUMBER, MAX_NUMBER);
  const operand2 = getRandomNum(MIN_NUMBER, MAX_NUMBER);

  const mathOperators = ['+', '-', '*'];
  const operator = mathOperands[getRandomNum(0, mathOperators.length - 1)];

  const question = `${operand1}${operator}${operand2}`;

  const operations = {
    '+': (x, y) => x + y,
    '-': (x, y) => x - y,
    '*': (x, y) => x * y,
  };

  const correctAnswer = operations[operator](operand1, operand2).toString();

  return { question, correctAnswer };
}

function getCalc() {
  return { quiz, generateGameData };
}

export default getCalc;
