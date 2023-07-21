const formatValue = (value) => {
  if (value === null) return null;

  const type = typeof value;

  const types = {
    string: `'${value}'`,
    object: '[complex value]',
  };

  return types[type] || String(value);
};

const makePlain = (tree) => {
  const iter = (data, path = '') => data
    .map((node) => {
      const {
        key, status, value, oldValue, newValue, children,
      } = node;
      const accPath = !path ? `${key}` : `${path}.${key}`;
      switch (status) {
        case 'unchanged':
          return null;
        case 'added':
          return `Property '${accPath}' was ${status} with value: ${formatValue(value)}\n`;
        case 'removed':
          return `Property '${accPath}' was ${status}\n`;
        case 'updated':
        {
          const value1 = formatValue(oldValue);
          const value2 = formatValue(newValue);
          return `Property '${accPath}' was ${status}. From ${value1} to ${value2}\n`;
        }
        case 'nested':
          return iter(children, accPath);
        default:
          throw new Error(`Unknow type ${status}!`);
      }
    }).join('');
  return iter(tree).trim();
};

export default makePlain;
