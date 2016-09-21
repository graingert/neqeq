var eqeq = require('eqeq');

function neqeq(var1, var2) {
  return !eqeq(var1, var2);
}

module.exports = neqeq;
