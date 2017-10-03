'use strict';

const isPlainObj = require('is-plain-obj');

const OPTION_ERROR = 'Expected `win32Ext` option to be a file extension for Windows executables (<string>, `.exe` by default)';

module.exports = function toExecutableName(...args) {
  const argLen = args.length;

  if (argLen !== 1 && argLen !== 2) {
    throw new RangeError(`Expected 1 or 2 arguments (<string>[, <Object>]), but got ${
      argLen === 0 ? 'no' : argLen
    } arguments instead.`);
  }

  const [binName] = args;

  if (typeof binName !== 'string') {
    throw new TypeError(`Expected a binary name (<string>), but got a non-string value ${binName}.`);
  }

  if (argLen === 2) {
    if (!isPlainObj(args[1])) {
      throw new TypeError(`Expected a plain object to set to-executable-name options, but got ${
        args[1]
      }.`);
    }

    const {win32Ext} = args[1];

    if (typeof win32Ext !== 'string') {
      throw new TypeError(`${OPTION_ERROR}, but got a non-string value ${args[1].win32Ext}.`);
    }

    if (win32Ext.length === 0) {
      throw new Error(`${
        OPTION_ERROR
      }, but got '' (empty string). If you don't want to append any file extension to the string, there is no need to use to-executable-name.`);
    }
  }

  if (process.platform === 'win32') {
    return `${binName}${args[1] && args[1].win32Ext ? args[1].win32Ext : '.exe'}`;
  }

  return binName;
};
