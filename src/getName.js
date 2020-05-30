import readlineSync from 'readline-sync';

const userName = readlineSync.question('May I have your name? ');

const name = userName[0].toUpperCase() + userName.slice(1);

export default name;
