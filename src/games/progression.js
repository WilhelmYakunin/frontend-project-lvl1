import getRandomNum from '../getRandomNum.js';

const MIN_NUMBER = 1;
const MAX_NUMBER = 100;
const PROGRESSION_LENGTH = 10;
const HIDDEN_PLACEHOLDER = '..';
const quiz = 'What number is missing in the progression?';

function generateGameData() {
  const firstProgressionNum = getRandomNum(MIN_NUMBER, MAX_NUMBER);
  const progressionStep = getRandomNum(MIN_NUMBER, MAX_NUMBER);
  const indexOfHiddenElement = getRandomNum(0, PROGRESSION_LENGTH - 1);
  const numsOfProgression = [];
  let correctAnswer;

  for (let i = 0; i < PROGRESSION_LENGTH; i += 1) {
    if (i !== indexOfHiddenElement) {
      const nextNum = firstProgressionNum + progressionStep * (i - 1);
      numsOfProgression.push(nextNum);
    } else {
      correctAnswer = (firstProgressionNum + progressionStep * (i - 1)).toString();
      numsOfProgression.push(HIDDEN_PLACEHOLDER);
    }
  }

  const question = numsOfProgression.join(' ');

  return { question, correctAnswer };
}

function getMathProgression() {
  return { quiz, generateGameData };
}

export default getMathProgression;
