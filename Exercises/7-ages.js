'use strict';

const ages = persons => {
  const res = {};
  for (const key in persons) {
    const person = persons[key];
    res[key] = person.died - person.born;
  }
  return res;
};

module.exports = { ages };
