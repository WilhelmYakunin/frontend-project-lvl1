import readlineSync from 'readline-sync';

function playGame(setGame, task) {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Welcome to the Brain Games! \n
  Hello, ${userName}! \n`);
  console.log(task);

  let roundsCout = 0;
  const numberToWin = 3;
  while (roundsCout !== numberToWin) {
    const gameData = setGame();

    const answer = readlineSync.question(`Question: ${gameData.question} \n`);
    console.log(`Your answer: ${answer}`);

    if (answer === gameData.rightAnswer) {
      console.log('Correct!\n');
      roundsCout += 1;
    } else {
      return console.log(`${answer} is wrong answer ;(.
        Correct answer was ${gameData.rightAnswer}.
        Let's try again, ${userName}!`);
    }
  } return console.log(`Congratulations, ${userName}!`);
}

export default playGame;
