#!/usr/bin/env node

import generateDiff from '../src/index.js';
import { program } from 'commander';

program
  .name('genDiff')
  .version('0.0.1')
  .description('Compares two configuration files and shows a difference.')
  .option('-f, --format <type>', 'output format', 'stylish')
  .arguments('<filepath1> <filepath2>')
  .action((filepath1, filepath2) => {
    const option = program.opts();
    console.log(generateDiff(filepath1, filepath2, option.format));
    })
  .parse();