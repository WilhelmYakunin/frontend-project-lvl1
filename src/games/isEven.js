import getRandomNum from '../getRandomNum.js';

const MIN_NUMBER_ISEVEN = 1;
const MAX_NUMBER_ISEVEN = 1000;

function getEven() {
  const quiz = 'Answer "yes" if the number is even, otherwise answer "no":';
  const question = getRandomNum(MIN_NUMBER_ISEVEN, MAX_NUMBER_ISEVEN);
  const correctAnswer = (question % 2 === 0) ? 'yes' : 'no';

  return { quiz, question, correctAnswer };
}

export default getEven;
