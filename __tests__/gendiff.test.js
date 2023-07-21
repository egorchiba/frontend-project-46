import { readFileSync } from 'node:fs';
import generateDiff from '../src/index.js';
// import { dirname } from 'path';

test('gendiff', () => {
  expect(generateDiff('./fixtures/file1.json', './fixtures/file2.json')).toBe(readFileSync('./fixtures/expectedStylish.txt', 'utf8'));
  expect(generateDiff('./fixtures/file1.yml', './fixtures/file2.yml')).toBe(readFileSync('./fixtures/expectedStylish.txt', 'utf8'));
  expect(generateDiff('./fixtures/file1.json', './fixtures/file2.json', 'plain')).toBe(readFileSync('./fixtures/expectedPlain.txt', 'utf8'));
  expect(generateDiff('./fixtures/file1.yml', './fixtures/file2.yml', 'plain')).toBe(readFileSync('./fixtures/expectedPlain.txt', 'utf8'));
  expect(generateDiff('./fixtures/file1.json', './fixtures/file2.json', 'json')).toBe(readFileSync('./fixtures/expectedJSON.txt', 'utf8'));
  expect(generateDiff('./fixtures/file1.yml', './fixtures/file2.yml', 'json')).toBe(readFileSync('./fixtures/expectedJSON.txt', 'utf8'));
});
