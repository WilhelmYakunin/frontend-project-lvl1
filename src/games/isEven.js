import getRandomNum from '../getRandomNum.js';

function even() {
  const question = getRandomNum(1, 100);
  const rightAnswer = (question % 2 === 0) ? 'yes' : 'no';

  return { question, rightAnswer };
}

export default even;
