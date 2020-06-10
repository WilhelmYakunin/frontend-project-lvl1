function correctAnswerWas(name, rightAnswer) {
  if ((name === 'even') || (name === 'prime')) {
    return (rightAnswer === 'yes') ? 'yes' : 'no';
  } return rightAnswer;
}

export default correctAnswerWas;
