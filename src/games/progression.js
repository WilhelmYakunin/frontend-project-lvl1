import getRandomNum from '../getRandomNum.js';

function getMathProgressionOfTenNumbers(minNumber, maxNumber) {
  const gameQuiz = 'What number is missing in the progression?';
  const progressionStep = getRandomNum(minNumber, maxNumber);
  const progressionLength = 9;
  const numsOfProgression = [getRandomNum(minNumber, maxNumber)];

  for (let i = 1; i < progressionLength; i += 1) {
    const nextNum = numsOfProgression[(i - 1)] + progressionStep;
    numsOfProgression.push(nextNum);
  }
  const rightAnswer = numsOfProgression[getRandomNum(0, progressionLength)].toString();
  const questionEssence = numsOfProgression.toString().replace(rightAnswer, '..').replace(/,/g, ' ');

  return { gameQuiz, questionEssence, rightAnswer };
}

export default getMathProgressionOfTenNumbers;
