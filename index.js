'use strict';

module.exports = function toExecutableName(binName, options) {
  options = Object.assign({}, options);

  if (typeof binName !== 'string') {
    throw new TypeError(`Expected a binary name (<string>), but got a non-string value ${binName}.`);
  }

  if (options.win32Ext) {
    if (typeof options.win32Ext !== 'string') {
      throw new TypeError(
        `Expected \`win32Ext\` option to be a file extension for Windows executables (<string>, \`.exe\` by default), but got a non-string value ${
          options.win32Ext
        }.`
      );
    }
  } else {
    options.win32Ext = '.exe';
  }

  if (process.platform === 'win32') {
    return `${binName}${options.win32Ext}`;
  }

  return binName;
};
