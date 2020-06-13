import getRandomNum from '../getRandomNum.js';

const task = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  for (let i = 2; i < Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return false;
    }
  } return true;
};

function getPrime(dificulty) {
  const question = getRandomNum(dificulty[0], dificulty[1]);
  const rightAnswer = (isPrime(question)) ? 'yes' : 'no';

  return { question, rightAnswer };
}

export { getPrime, task };
