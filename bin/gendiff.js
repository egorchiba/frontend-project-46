#!/usr/bin/env node

import { program } from 'commander';
import generateDiff from '../src/index.js';

program
  .name('gendiff')
  .version('0.0.1')
  .description('Compares two configuration files and shows a difference.')
  .option('-f, --format <type>', 'output format', 'stylish')
  .arguments('<filepath1> <filepath2>')
  .action((filepath1, filepath2) => {
    const option = program.opts();
    console.log(generateDiff(filepath1, filepath2, option.format));
  })
  .parse();
