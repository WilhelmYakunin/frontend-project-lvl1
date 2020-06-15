import getRandomNum from '../getRandomNum.js';

const findGcd = (a, b) => (b === 0 ? Math.abs(a) : findGcd(b, a % b));

function getGcd(minNumber, maxNumber) {
  const gameQuiz = 'Find the greatest common divisor of given numbers:';
  const operand1 = getRandomNum(minNumber, maxNumber);
  const operand2 = getRandomNum(minNumber, maxNumber);

  const questionEssence = `${operand1} ${operand2}`;

  const rightAnswer = findGcd(operand1, operand2).toString();

  return { gameQuiz, questionEssence, rightAnswer };
}

export default getGcd;
