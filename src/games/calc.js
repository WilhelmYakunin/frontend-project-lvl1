import getRandomNum from '../getRandomNum.js';

function calculate() {
  const getFirstRandomNum = getRandomNum(-30, 30);
  const getSecondRandomNum = getRandomNum(1, 30);

  const mathOperands = ['+', '-', '*'];

  const randomOperand = mathOperands[Math.floor(Math.random() * mathOperands.length)];

  const question = `${getFirstRandomNum.toString()}${randomOperand}${getSecondRandomNum.toString()}`;

  const makeEval = {
    '+': (x, y) => x + y,
    '-': (x, y) => x - y,
    '*': (x, y) => x * y,
  };

  const rightAnswer = makeEval[randomOperand](getFirstRandomNum, getSecondRandomNum).toString();

  return { question, rightAnswer };
}

export default calculate;
