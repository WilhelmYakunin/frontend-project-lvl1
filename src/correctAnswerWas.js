// if function of 'is even' or 'is prime' game is called it needs to switch
// otherwise is expected the evaluated right answer to show up
function correctAnswerWas(name, right) {
  if ((name === 'even') || (name === 'prime')) {
    return (right === 'yes') ? 'yes' : 'no';
  } return right;
}

export default correctAnswerWas;
