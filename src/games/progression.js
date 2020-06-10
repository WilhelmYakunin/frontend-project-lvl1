import getRandomNum from '../getRandomNum.js';

function mathProgression() {
  const progressionStep = getRandomNum(1, 10);
  const progressionArray = [getRandomNum(-30, 30)];

  for (let i = 1; i < 10; i += 1) {
    const nextNum = progressionArray[(i - 1)] + progressionStep;
    progressionArray.push(nextNum);
  }

  const progressionString = progressionArray.toString();
  const randomIndexNum = getRandomNum(0, 9);
  const rightAnswer = progressionArray[randomIndexNum].toString();
  const question = progressionString.replace(rightAnswer, '..').replace(/,/g, ' ');

  return { question, rightAnswer };
}

export default mathProgression;
