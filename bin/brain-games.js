#! node --experimental-modules
import sayHello from '../src/cli.js';
import userName from '../src/getName.js';

const name = userName[0].toUpperCase() + userName.slice(1);

sayHello(name);
