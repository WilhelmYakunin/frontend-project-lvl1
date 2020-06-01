import readlineSync from 'readline-sync';
import randomNum from '../src/randomNum.js';

const evenGamePlay = function even() {
  return {
    rule: 'Answer "yes" if the number is even, otherwise answer "no".',
    setGameData() {
      const question = randomNum(1, 100);// get a random number for question
      const right = question % 2 === 0;// get data for checking user's answer

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

export default evenGamePlay;
