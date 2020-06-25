import getRandomNum from '../getRandomNum.js';

const MIN_NUMBER = 1;
const MAX_NUMBER = 101;
const QUIZ = 'Answer "yes" if given number is prime. Otherwise answer "no":';

const isPrime = (num) => {
  for (let i = 2; i < Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return false;
    }
  } return true;
};

function generateGameData() {
  const question = getRandomNum(MIN_NUMBER, MAX_NUMBER);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';

  return { question, correctAnswer };
}

function getPrime() {
  return { QUIZ, generateGameData };
}

export default getPrime;
