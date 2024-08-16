const transform = str => `[className*="_${str.startsWith('.') ? str.slice(1) : str}"]`;

export const byClass = str => {
  return str
    .split(' ')
    .map(cn => (cn.startsWith('.') ? transform(cn.slice(1)) : cn))
    .join(' ');
};
