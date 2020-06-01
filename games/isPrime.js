import readlineSync from 'readline-sync';
import randomNum from '../src/randomNum.js';

const primeGamePlay = function prime() {
  return {
    rule: 'Answer "yes" if given number is prime. Otherwise answer "no".',
    setGameData() {
      const question = randomNum(1, 100);// get a random number for question
      // make the function for evaluating the "right" parametr
      const isPrime = () => {
        for (let i = 2; i < question; i += 1) {
          if (question % i === 0) {
            return false;
          }
        } return true;
      };
      const right = isPrime();// get data for checking user's answer

      return { question, right };
    },
    // get user's answer
    getAnswer: function getAnswer(num) {
      return readlineSync.question(`Question: ${num} \n`);
    },
    // get correctAnswer for put in the game do-while loop
    answerCheck(answer, isEven) {
      return (isEven && (answer === 'yes')) || (!isEven && (answer === 'no'));
    },
    // checking if user was wrong with the answer
    getCorrectAnswer(right) {
      return (right === true) ? 'yes' : 'no';
    },
  };
};

export default primeGamePlay;