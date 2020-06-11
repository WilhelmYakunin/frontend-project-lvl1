import getRandomNum from '../getRandomNum.js';

function prime() {
  const question = getRandomNum(4, 100);

  const isPrime = (num) => {
    let coutIfNotPrime = 0;
    for (let i = 2; i < Math.sqrt(question); i += 1) {
      coutIfNotPrime += ((num % i === 0) ? 1 : 0);
    } return (coutIfNotPrime === 0);
  };

  const rightAnswer = (isPrime(question)) ? 'yes' : 'no';

  return { question, rightAnswer };
}

export default prime;
