/*!
 * to-executable-name | MIT (c) Shinnosuke Watanabe
 * https://github.com/shinnn/to-executable-name
*/
module.exports = function toExecutableName(binName) {
  'use strict';

  if (typeof binName !== 'string') {
    throw new TypeError(
      String(binName) +
      ' is not a string. The first argument to to-executable-name must be a string.'
    );
  }

  if (process.platform === 'win32') {
    return binName + '.exe';
  }

  return binName;
};
