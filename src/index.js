import readlineSync from 'readline-sync';

const ROUNDS_TO_WIN = 3;

function playGame(getGameData) {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  const { quiz, generateGameData } = getGameData();
  console.log(quiz);

  let winsCount = 0;
  while (winsCount < ROUNDS_TO_WIN) {
    const { question, correctAnswer } = generateGameData();

    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');

    if (answer !== correctAnswer) {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswer}.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    } console.log('Correct!');
    winsCount += 1;
  }
  console.log(`Congratulations, ${userName}!`);
}

export default playGame;
