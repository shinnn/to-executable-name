'use strict';

const isPlainObj = require('is-plain-obj');

module.exports = function toExecutableName(...args) {
  const argLen = args.length;

  if (argLen !== 1 && argLen !== 2) {
    throw new RangeError(`Expected 1 or 2 arguments (<string>[, <Object>]), but got ${
      argLen === 0 ? 'no' : argLen
    } arguments instead.`);
  }

  if (argLen === 2 && !isPlainObj(args[1])) {
    throw new TypeError(`Expected a plain object to set to-executable-name options, but got ${
      args[1]
    }.`);
  }

  const [binName] = args;
  const options = Object.assign({
    win32Ext: '.exe'
  }, args[1]);

  if (typeof binName !== 'string') {
    throw new TypeError(`Expected a binary name (<string>), but got a non-string value ${binName}.`);
  }

  if (typeof options.win32Ext !== 'string') {
    throw new TypeError(`Expected \`win32Ext\` option to be a file extension for Windows executables (<string>, \`.exe\` by default), but got a non-string value ${
      options.win32Ext
    }.`);
  }

  if (process.platform === 'win32') {
    return `${binName}${options.win32Ext}`;
  }

  return binName;
};
