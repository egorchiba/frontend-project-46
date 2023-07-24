import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { readFileSync } from 'node:fs';
import generateDiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => readFileSync(getFixturePath(filename), 'utf-8');

const dataTests = [
  { 
    file1: 'file1.json', file2: 'file2.json', format: 'stylish', expected: 'expectedStylish.txt',
  },
  {
    file1: 'file1.yml', file2: 'file2.yml', format: 'stylish', expected: 'expectedStylish.txt',
  },
  { 
    file1: 'file1.json', file2: 'file2.json', format: 'plain', expected: 'expectedPlain.txt',
  },
  {
    file1: 'file1.yml', file2: 'file2.yml', format: 'plain', expected: 'expectedPlain.txt',
  },
  { 
    file1: 'file1.json', file2: 'file2.json', format: 'json', expected: 'expectedJSON.txt',
  },
  {
    file1: 'file1.yml', file2: 'file2.yml', format: 'json', expected: 'expectedJSON.txt',
  },
];

test.each(dataTests)('$file1, $file2, $format', ({
  file1, file2, format, expected,
}) => {
  const filePath1 = getFixturePath(file1);
  const filePath2 = getFixturePath(file2);
  const output = format;
  const result = readFile(expected);
  expect(generateDiff(filePath1, filePath2, output)).toEqual(result);
});
