import getRandomNum from '../getRandomNum.js';

function getEven(minNumber, maxNumber) {
  const gameQuiz = 'Answer "yes" if the number is even, otherwise answer "no":';
  const questionEssence = getRandomNum(minNumber, maxNumber);
  const rightAnswer = (questionEssence % 2 === 0) ? 'yes' : 'no';

  return { gameQuiz, questionEssence, rightAnswer };
}

export default getEven;
