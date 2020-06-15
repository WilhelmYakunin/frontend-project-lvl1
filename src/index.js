import readlineSync from 'readline-sync';

function playGame(generateRound) {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Welcome to the Brain Games! \n
  Hello, ${userName}!`);

  const diapozoneOfNumsForAllGames = [1, 100];
  const [minNumber, maxNumber] = diapozoneOfNumsForAllGames;

  let roundsCount = 0;
  const roundsToWin = 3;
  while (roundsCount < roundsToWin) {
    const gameData = generateRound(minNumber, maxNumber);
    const { gameQuiz, questionEssence, rightAnswer } = gameData;
    console.log(gameQuiz);
    const answer = readlineSync.question(`${questionEssence} \n`);
    console.log(`Your answer: ${answer}`);

    if (answer === rightAnswer) {
      console.log('Correct!\n');
      roundsCount += 1;
    } else {
      return console.log(`${answer} is wrong answer ;(.
        Correct answer was ${rightAnswer}.
        Let's try again, ${userName}!`);
    }
  } console.log(`Congratulations, ${userName}!`);
  return undefined;
}

export default playGame;
