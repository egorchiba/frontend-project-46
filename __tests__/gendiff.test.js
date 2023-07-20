import generateDiff from '../src/index';
// import { dirname } from 'path';
import { readFileSync } from 'node:fs';

test('gendiff', () => {
    expect(generateDiff('./fixtures/file1.json', './fixtures/file2.json')).toBe(readFileSync('./fixtures/result' ,'utf8'));
    expect(generateDiff('./fixtures/file1.yml', './fixtures/file2.yml')).toBe(readFileSync('./fixtures/result' ,'utf8'));
})