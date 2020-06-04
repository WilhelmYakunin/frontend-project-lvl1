import randomNum from '../randomNum.js';

function mathProgression() {
  // make a progression step
  const progression = randomNum(1, 10);

  // formulating an expression staffed with ariphmetic progression
  // first initialize a first element in the array
  const progressionArray = [randomNum(-30, 30)];

  // make the array staffed with progression numbers
  for (let i = 1; i < 10; i += 1) {
    const nextNum = progressionArray[(i - 1)] + progression;
    progressionArray.push(nextNum);
  }

  // defin the rigth answer through the random numbers
  const guessIndex = randomNum(0, 9);
  const right = progressionArray[guessIndex].toString();

  // assign progression array to a string
  const progressionString = progressionArray.toString();
  const question = progressionString.replace(right, '..').replace(/,/g, ' ');

  return { question, right };
}

export default mathProgression;
