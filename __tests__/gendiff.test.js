import genDiff from '/Users/egorchebanov/frontend-project-46/index.js';
// import { dirname } from 'path';
import { readFileSync } from 'node:fs';

test('gendiff', () => {
    expect(genDiff('/Users/egorchebanov/frontend-project-46/fixtures/file1.json', '/Users/egorchebanov/frontend-project-46/fixtures/file2.json')).toBe(readFileSync('/Users/egorchebanov/frontend-project-46/fixtures/result' ,'utf8'));
})