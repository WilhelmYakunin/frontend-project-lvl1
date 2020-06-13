import getRandomNum from '../getRandomNum.js';

const task = 'Answer "yes" if the number is even, otherwise answer "no".';

function getEven(dificulty) {
  const question = getRandomNum(dificulty[0], dificulty[1]);
  const rightAnswer = (question % 2 === 0) ? 'yes' : 'no';

  return { question, rightAnswer };
}

export { getEven, task };
