import getRandomNum from '../getRandomNum.js';

const task = 'What number is missing in the progression?';

function getMathProgression() {
  // diapozone of random nums is randomly choosen
  const progressionStep = getRandomNum(1, 10);
  const progressionArray = [getRandomNum(-30, 30)];

  for (let i = 1; i < 10; i += 1) {
    const nextNum = progressionArray[(i - 1)] + progressionStep;
    progressionArray.push(nextNum);
  }

  const progressionString = progressionArray.toString();
  const rightAnswer = progressionArray[getRandomNum(0, 9)].toString();
  const question = progressionString.replace(rightAnswer, '..').replace(/,/g, ' ');

  return { question, rightAnswer };
}

export { getMathProgression, task };
