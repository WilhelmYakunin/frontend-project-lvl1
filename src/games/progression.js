import getRandomNum from '../getRandomNum.js';

const task = 'What number is missing in the progression?';

function getMathProgression(difficulty) {
  const progressionStep = getRandomNum(1, 10);
  const tenNumbers = [getRandomNum(difficulty[0], difficulty[1])];

  for (let i = 1; i < 10; i += 1) {
    const nextNum = tenNumbers[(i - 1)] + progressionStep;
    tenNumbers.push(nextNum);
  }

  const rightAnswer = tenNumbers[getRandomNum(0, 9)].toString();
  const question = tenNumbers.toString().replace(rightAnswer, '..').replace(/,/g, ' ');

  return { question, rightAnswer };
}

export { getMathProgression, task };
