import randomNum from '../randomNum.js';

function even() {
  const question = randomNum(1, 100);// get a random number for question
  const right = (question % 2 === 0) ? 'yes' : 'no'; // get data for checking user's answer

  return { question, right };
}

export default even;
