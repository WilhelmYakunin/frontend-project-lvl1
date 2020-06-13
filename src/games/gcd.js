import getRandomNum from '../getRandomNum.js';

const task = 'Find the greatest common divisor of given numbers.';

const gcd = (a, b) => (b === 0 ? Math.abs(a) : gcd(b, a % b));

function getGcd() {
  // diapozone of random nums is randomly choosen
  const operand1 = getRandomNum(-30, 30);
  const operand2 = getRandomNum(1, 30);

  const question = `${operand1} ${operand2}`;

  const rightAnswer = gcd(operand1, operand2).toString();

  return { question, rightAnswer };
}

export { getGcd, task };
