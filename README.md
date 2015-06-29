# to-executable-name

[![NPM version](https://img.shields.io/npm/v/to-executable-name.svg)](https://www.npmjs.com/package/to-executable-name)
[![Build Status](https://travis-ci.org/shinnn/to-executable-name.svg?branch=master)](https://travis-ci.org/shinnn/to-executable-name)
[![Build status](https://ci.appveyor.com/api/projects/status/tesr30vmgccrb138?svg=true)](https://ci.appveyor.com/project/ShinnosukeWatanabe/to-executable-name)
[![Coverage Status](https://img.shields.io/coveralls/shinnn/to-executable-name.svg)](https://coveralls.io/r/shinnn/to-executable-name)
[![devDependency Status](https://img.shields.io/david/dev/shinnn/to-executable-name.svg)](https://david-dm.org/shinnn/to-executable-name#info=devDependencies)

Append `.exe` to a given string if the program is running on a [Windows](http://windows.microsoft.com/) environment

```javascript
const toExecutableName = require('to-executable-name');

// On Windows
toExecutableName('iojs'); //=> 'iojs.exe'

// Otherwise
toExecutableName('iojs'); //=> 'iojs'
```

## Installation

[Use npm.](https://docs.npmjs.com/cli/install)

```
npm install to-executable-name
```

## API

```javascript
const toExecutableName = require('to-executable-name');
```

### toExecutableName(*binName*)

*binName*: [`String`](http://www.ecma-international.org/ecma-262/5.1/#sec-4.3.16)  
Return: `String`

## License

Copyright (c) 2015 [Shinnosuke Watanabe](https://github.com/shinnn)

Licensed under [the MIT License](./LICENSE).
