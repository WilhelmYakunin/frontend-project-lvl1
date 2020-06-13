#!/usr/bin/env node
import playGame from '../src/index.js';
import { getPrime, task } from '../src/games/isPrime.js';

playGame(getPrime, task);
