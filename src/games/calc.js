import getRandomNum from '../getRandomNum.js';

function calculate() {
  const firstRandomOperand = getRandomNum(-30, 30);
  const secondRandomOperand = getRandomNum(1, 30);

  const mathOperands = ['+', '-', '*'];

  const randomOperator = mathOperands[Math.floor(Math.random() * mathOperands.length)];

  const question = `${firstRandomOperand.toString()}${randomOperator}${secondRandomOperand.toString()}`;

  const makeEval = {
    '+': (x, y) => x + y,
    '-': (x, y) => x - y,
    '*': (x, y) => x * y,
  };

  const rightAnswer = makeEval[randomOperator](firstRandomOperand, secondRandomOperand).toString();

  return { question, rightAnswer };
}

export default calculate;
