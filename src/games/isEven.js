import getRandomNum from '../getRandomNum.js';

const task = 'Answer "yes" if the number is even, otherwise answer "no".';

function getEven() {
  // diapozone of random nums is randomly choosen
  const question = getRandomNum(1, 100);
  const rightAnswer = (question % 2 === 0) ? 'yes' : 'no';

  return { question, rightAnswer };
}

export { getEven, task };
