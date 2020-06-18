import getRandomNum from '../getRandomNum.js';

const MIN_NUMBER_PROGRESSION = 1;
const MAX_NUMBER_PROGRESSION = 100;
const PROGRESSION_LENGTH = 11;

function getMathProgressionOfTenNumbers() {
  const quiz = 'What number is missing in the progression?';

  const firstProgressionNum = getRandomNum(MIN_NUMBER_PROGRESSION, MAX_NUMBER_PROGRESSION);
  const progressionStep = getRandomNum(MIN_NUMBER_PROGRESSION, MAX_NUMBER_PROGRESSION);
  const indexOfRandomElement = getRandomNum(0, PROGRESSION_LENGTH - 1);
  const numsOfProgression = [firstProgressionNum];
  let correctAnswer;

  for (let i = 2; i < PROGRESSION_LENGTH; i += 1) {
    let nextNum = firstProgressionNum + progressionStep * (i - 1);
    if (i === indexOfRandomElement) {
      correctAnswer = nextNum.toString();
      nextNum = '..';
    } numsOfProgression.push(nextNum);
  }

  const question = numsOfProgression.join(' ');

  return { quiz, question, correctAnswer };
}

export default getMathProgressionOfTenNumbers;
