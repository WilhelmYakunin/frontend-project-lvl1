import getRandomNum from '../getRandomNum.js';

function prime() {
  const question = getRandomNum(1, 100);

  const isPrime = (num) => {
    if (Math.abs(num) <= 3) {
      return true;
    } const limit = Math.sqrt(num);
    for (let i = 2; i <= limit; i += 1) {
      if (num % i === 0) {
        return false;
      }
    } return true;
  };

  const rightAnswer = (isPrime(question)) ? 'yes' : 'no';

  return { question, rightAnswer };
}

export default prime;
