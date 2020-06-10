import getRandomNum from '../getRandomNum.js';

function gcd() {
  const firstRandomNum = getRandomNum(-30, 30);
  const secondRandomNum = getRandomNum(1, 30);

  const question = `${firstRandomNum.toString()} ${secondRandomNum.toString()}`;

  const getGCD = (a, b) => (b === 0 ? Math.abs(a) : getGCD(b, a % b));

  const rightAnswer = getGCD(firstRandomNum, secondRandomNum).toString();

  return { question, rightAnswer };
}

export default gcd;
