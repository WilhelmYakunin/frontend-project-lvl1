#! node --experimental-modules
import name from '../src/getName.js';
import greeting from '../src/greeting.js';
import calc from '../games/calc.js';

greeting(name);

calc(name);
