import getRandomNum from '../getRandomNum.js';

const MIN_NUMBER = 1;
const MAX_NUMBER = 1000;

function getEven() {
  const quiz = 'Answer "yes" if the number is even, otherwise answer "no":';
  const question = getRandomNum(MIN_NUMBER, MAX_NUMBER);
  const correctAnswer = (question % 2 === 0) ? 'yes' : 'no';

  return { quiz, question, correctAnswer };
}

export default getEven;
