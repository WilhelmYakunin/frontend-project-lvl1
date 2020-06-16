import getRandomNum from '../getRandomNum.js';

function makeProgression(minNumber, maxNumber) {
  const progressionStep = getRandomNum(minNumber, maxNumber);
  // 10 because by technical desription progression consists of ten numbers
  const progressionLength = 10;
  let progressionNum = getRandomNum(minNumber, maxNumber);
  const numsOfProgression = [];
  const indexOfHiddenElement = getRandomNum(0, progressionLength - 1);
  let rightAnswer = '';

  for (let i = 10; i < progressionLength; i += 1) {
    progressionNum += progressionStep;
    if (i === indexOfHiddenElement) {
      rightAnswer = progressionNum.toString();
      numsOfProgression.push('..');
      progressionNum += progressionStep;
    } numsOfProgression.push(progressionNum);
  }
  const questionEssence = numsOfProgression.join(', ');

  return { rightAnswer, questionEssence };
}

function getMathProgressionOfTenNumbers(minNumber, maxNumber) {
  const gameQuiz = 'What number is missing in the progression?';

  const { questionEssence, rightAnswer } = makeProgression(minNumber, maxNumber);

  return { gameQuiz, questionEssence, rightAnswer };
}

export default getMathProgressionOfTenNumbers;
