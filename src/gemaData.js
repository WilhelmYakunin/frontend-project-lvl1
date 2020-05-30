const gameData = {
  isEven: {
    rule: 'Answer "yes" if the number is even, otherwise answer "no".',
    rights: function isEven(num) { return num % 2 === 0; },
  },
  isPrime: {
    rule: 'Answer "yes" if given number is prime. Otherwise answer "no".',
    rights: function isPrime(num) {
      for (let i = 2; i < num; i += 1) {
        if (num % i === 0) {
          return false;
        }
      } return true;
    },
  },
};

export default gameData;
