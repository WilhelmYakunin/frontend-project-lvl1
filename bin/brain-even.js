#!/usr/bin/env node
import playGame from '../src/index.js';
import { getEven, task } from '../src/games/isEven.js';

playGame(getEven, task);
