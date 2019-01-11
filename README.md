# to-executable-name

[![npm version](https://img.shields.io/npm/v/to-executable-name.svg)](https://www.npmjs.com/package/to-executable-name)
[![Build Status](https://travis-ci.com/shinnn/to-executable-name.svg?branch=master)](https://travis-ci.com/shinnn/to-executable-name)
[![Coverage Status](https://img.shields.io/coveralls/shinnn/to-executable-name.svg)](https://coveralls.io/github/shinnn/to-executable-name)

Append `.exe` to a given string if the program is running on a [Windows](https://www.microsoft.com/windows) environment

```javascript
const toExecutableName = require('to-executable-name');

// On Windows
toExecutableName('node'); //=> 'node.exe'

// Otherwise
toExecutableName('node'); //=> 'node'
```

## Installation

[Use](https://docs.npmjs.com/cli/install) [npm](https://docs.npmjs.com/about-npm/).

```
npm install to-executable-name
```

## API

```javascript
const toExecutableName = require('to-executable-name');
```

### toExecutableName(*binName* [, *option*])

*binName*: `string`  
*option*: `Object`  
Return: `string`

#### options.win32Ext

Type: `string`  
Default: `.exe`

A file extension that will be appended to the string on Windows.

```javascript
// On Windows

toExecutableName('foo'); //=> 'foo.exe'
toExecutableName('foo', {win32Ext: '.bat'}); //=> 'foo.bat'
```

## License

[ISC License](./LICENSE) © 2017 - 2019 Shinnosuke Watanabe
