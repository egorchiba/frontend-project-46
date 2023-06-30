import genDiff from '/Users/egorchebanov/frontend-project-46/index.js';
// import { dirname } from 'path';
import { readFileSync } from 'node:fs';

test('gendiff', () => {
    expect(genDiff('./fixtures/file1.json', './fixtures/file2.json')).toBe(readFileSync('./fixtures/result' ,'utf8'));
})