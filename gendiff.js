#!/usr/bin/env node

import genDiff from './index.js'
import { program } from 'commander';

program
  .name('genDiff')
  .version('0.0.1')
  .description('Compares two configuration files and shows a difference.')
  .option('-f, --format <type>', 'output format')
  .arguments('<filepath1> <filepath2>')
  .action((filepath1, filepath2) => {
    console.log(genDiff(filepath1, filepath2));
    })

program.parse();