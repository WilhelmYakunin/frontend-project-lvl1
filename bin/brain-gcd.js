#!/usr/bin/env node
import playGame from '../src/index.js';
import { getGcd, task } from '../src/games/gcd.js';

playGame(getGcd, task);
