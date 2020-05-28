#! node --experimental-modules

import userName from '../src/getName.js';
import isEven from '../src/isEven.js';

const name = userName[0].toUpperCase() + userName.slice(1);

isEven(name);
