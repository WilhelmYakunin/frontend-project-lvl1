import readlineSync from 'readline-sync';
const ROUNDS_TO_WIN = 3;

function playGame(generateGameData) {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Welcome to the Brain Games! \n
  Hello, ${userName}!`);
  
  let roundsCount = 0;
  while (roundsCount < ROUNDS_TO_WIN) {
    const gameData = generateGameData();
    const { quiz, question, correctAnswer } = gameData;
    console.log(quiz);
    const answer = readlineSync.question(`${question} \n`);
    console.log(`Your answer: ${answer}`);

    if (answer === correctAnswer) {
      console.log('Correct!\n');
      roundsCount += 1;
    } else {
      return console.log(`${answer} is wrong answer ;(.
        Correct answer was ${correctAnswer}.
        Let's try again, ${userName}!`);
    }
  } console.log(`Congratulations, ${userName}!`);
}

export default playGame;
