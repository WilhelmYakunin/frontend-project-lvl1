import getRandomNum from '../getRandomNum.js';

const task = 'Answer "yes" if the number is even, otherwise answer "no".';

function getEven(difficulty) {
  const question = getRandomNum(difficulty[0], difficulty[1]);
  const rightAnswer = (question % 2 === 0) ? 'yes' : 'no';

  return { question, rightAnswer };
}

export { getEven, task };
