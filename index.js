
import { readFileSync } from 'node:fs';
import _ from 'lodash';

export default (filepath1, filepath2) => {
    const obj1 = JSON.parse(readFileSync(filepath1));
    const obj2 = JSON.parse(readFileSync(filepath2));
    const keysObj = {};
    const keys = Object.keys(Object.assign(keysObj, obj1, obj2));
    const sortedKeys = _.sortBy(keys);
    let result = '\n';
    sortedKeys.forEach((key) => {
      if (obj1[key] === obj2[key]) {
        result = `${result}    ${key}: ${obj1[key]}\n`;
      } else {
        if (Object.hasOwn(obj1, key)) {
          result = `${result}  - ${key}: ${obj1[key]}\n`;
        }
        if (Object.hasOwn(obj2, key)) {
          result = `${result}  + ${key}: ${obj2[key]}\n`;
        }
      }
    });
    return result;
  };