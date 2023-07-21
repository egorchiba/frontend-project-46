import { readFileSync } from 'node:fs';
import path from 'node:path';
import yaml from 'js-yaml';

const parse = (filepath) => {
  const extention = path.extname(filepath);
  switch (extention) {
    case '.json':
      return JSON.parse(readFileSync(filepath));
      //        break;
    case ('.yml' || '.yaml'):
      return yaml.load(readFileSync(filepath));
      //        break;
    default: {
      return new Error(`Unknown extension: '${extention}'!`);
    }
  }
// return result;
};

export default parse;
