import getRandomNum from '../getRandomNum.js';

const task = 'What is the result of the expression?';

function getCalc(dificulty) {
  const operand1 = getRandomNum(dificulty[0], dificulty[1]);
  const operand2 = getRandomNum(dificulty[0], dificulty[1]);

  const mathOperands = ['+', '-', '*'];
  const operator = mathOperands[getRandomNum(0, mathOperands.length - 1)];

  const question = `${operand1}${operator}${operand2}`;

  const operations = {
    '+': (x, y) => x + y,
    '-': (x, y) => x - y,
    '*': (x, y) => x * y,
  };

  const rightAnswer = operations[operator](operand1, operand2).toString();

  return { task, question, rightAnswer };
}

export { getCalc, task };
