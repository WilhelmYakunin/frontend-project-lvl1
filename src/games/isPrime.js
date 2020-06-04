import randomNum from '../randomNum.js';

function prime() {
  const question = randomNum(1, 100);// get a random number for question

  // make the function for evaluating the "right" parametr
  const isPrime = () => ![...Array(question).keys()].slice(2)
    .map((iter) => !(question % iter)).includes(true) && ![0, 1].includes(question);
  // get data for checking user's answer
  const right = (isPrime()) ? 'yes' : 'no';

  return { question, right };
}

export default prime;
