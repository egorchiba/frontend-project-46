import yaml from 'js-yaml';

const parse = (data, ext) => {
  const extensions = {
    json: (fileData) => JSON.parse(fileData),
    yaml: (fileData) => yaml.load(fileData),
    yml: (fileData) => yaml.load(fileData),
  };
  return !extensions[ext] ? new Error(`Unknown extension: '${ext}'!`) : extensions[ext](data);
};

export default parse;
