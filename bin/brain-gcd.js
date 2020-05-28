#! node --experimental-modules
import userName from '../src/getName.js';
import sayHello from '../src/cli.js';
import gcd from '../src/gcd.js';

const name = userName[0].toUpperCase() + userName.slice(1);

sayHello(name);

gcd(name);
