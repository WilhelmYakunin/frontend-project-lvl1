import readlineSync from 'readline-sync';

const ROUNDS_TO_WIN = 3;

function playGame(setGameData) {
  const userName = readlineSync.question(`Welcome to the Brain Games!
May I have your name?`);
  console.log(`Hello, ${userName}!`);
  const { quiz, generateGameData } = setGameData();
  console.log(quiz);

  let winsCount = 0;
  while (winsCount < ROUNDS_TO_WIN) {
    const { question, correctAnswer } = generateGameData();

    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');

    if (answer !== correctAnswer) {
      console.log(`${answer} is wrong answer ;(.
        Correct answer was ${correctAnswer}.
        Let's try again, ${userName}!`);
      return;
    } console.log('Correct!');
    winsCount += 1;
  }
  console.log(`Congratulations, ${userName}!`);
}

export default playGame;
