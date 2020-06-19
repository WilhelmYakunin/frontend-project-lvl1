import getRandomNum from '../getRandomNum.js';

const MIN_NUMBER = 1;
const MAX_NUMBER = 100;

const findGcd = (a, b) => (b === 0 ? Math.abs(a) : findGcd(b, a % b));

function getGcd() {
  const quiz = 'Find the greatest common divisor of given numbers:';
  const operand1 = getRandomNum(MIN_NUMBER, MAX_NUMBER);
  const operand2 = getRandomNum(MIN_NUMBER, MAX_NUMBER);

  const question = `${operand1} ${operand2}`;

  const correctAnswer = findGcd(operand1, operand2).toString();

  return { quiz, question, correctAnswer };
}

export default getGcd;
