export default function setDificulty(dificulty) {
  if (dificulty === '1') {
    console.log('Your choie: easy ;)');
    return [-30, 30];
  } if (dificulty === '2') {
    console.log('Your choie: normal ;)');
    return [-60, 60];
  } console.log('Your choie: hard ;)');
  return [-100, 100];
}
