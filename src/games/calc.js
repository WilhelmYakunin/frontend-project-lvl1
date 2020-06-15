import getRandomNum from '../getRandomNum.js';

function getCalc(minNumber, maxNumber) {
  const gameQuiz = 'What is the result of the expression?';
  const operand1 = getRandomNum(minNumber, maxNumber);
  const operand2 = getRandomNum(minNumber, maxNumber);

  const mathOperands = ['+', '-', '*'];
  const operator = mathOperands[getRandomNum(0, mathOperands.length - 1)];

  const questionEssence = `${operand1}${operator}${operand2}`;

  const operations = {
    '+': (x, y) => x + y,
    '-': (x, y) => x - y,
    '*': (x, y) => x * y,
  };

  const rightAnswer = operations[operator](operand1, operand2).toString();

  return { gameQuiz, questionEssence, rightAnswer };
}

export default getCalc;
