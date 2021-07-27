'use strict';

const max = matrix => {
  let res = matrix[0][0];
  for (let i = 0; i < matrix.length; i++) {
    const row = matrix[i];
    for (let c = 0; c < row.length; c++) {
      const cell = row[c];
      if (res < cell) res = cell;
    }
  }
  return res;
};

module.exports = { max };

// const max = matrix => {
//   const m = (a, b) => (a > b ? a : b);
//   const res = matrix.map(row => row.reduce(m)).reduce(m);
//   return res;
// };
