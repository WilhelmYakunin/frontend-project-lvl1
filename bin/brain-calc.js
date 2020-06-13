#!/usr/bin/env node
import playGame from '../src/index.js';
import { getCalc, task } from '../src/games/calc.js';

playGame(getCalc, task);
