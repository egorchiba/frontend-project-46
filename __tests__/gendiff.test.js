import genDiff from '../index.js';
// import { dirname } from 'path';
import { readFileSync } from 'node:fs';

test('gendiff', () => {
    expect(genDiff('./fixtures/file1.json', './fixtures/file2.json')).toBe(readFileSync('./fixtures/result' ,'utf8'));
    expect(genDiff('./fixtures/file3.yml', './fixtures/file4.yml')).toBe(readFileSync('./fixtures/result' ,'utf8'));
})