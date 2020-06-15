import getRandomNum from '../getRandomNum.js';

const isPrime = (num) => {
  for (let i = 2; i < Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return false;
    }
  } return true;
};

function getPrime(minNumber, maxNumber) {
  const gameQuiz = 'Answer "yes" if given number is prime. Otherwise answer "no":';
  const questionEssence = getRandomNum(minNumber, maxNumber);
  const rightAnswer = isPrime(questionEssence) ? 'yes' : 'no';

  return { gameQuiz, questionEssence, rightAnswer };
}

export default getPrime;
