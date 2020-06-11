import getRandomNum from '../getRandomNum.js';

function gcd() {
  const firstRandomOperand = getRandomNum(-30, 30);
  const secondRandomOperand = getRandomNum(1, 30);

  const question = `${firstRandomOperand.toString()} ${secondRandomOperand.toString()}`;

  const getGCD = (a, b) => (b === 0 ? Math.abs(a) : getGCD(b, a % b));

  const rightAnswer = getGCD(firstRandomOperand, secondRandomOperand).toString();

  return { question, rightAnswer };
}

export default gcd;
