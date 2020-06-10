import getRandomNum from '../getRandomNum.js';

function prime() {
  const question = getRandomNum(4, 100);

  const isPrime = (num) => {
    for (let i = 2; i < Math.sqrt(question); i += 1) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  };

  const rightAnswer = (isPrime(question)) ? 'yes' : 'no';

  return { question, rightAnswer };
}

export default prime;
