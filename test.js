'use strict';

const test = require('tape');
const toExecutableName = require('.');

test('toExecutableName', t => {
  t.plan(5);

  t.equal(toExecutableName.name, 'toExecutableName', 'should have a function name.');

  Object.defineProperty(process, 'platform', {value: 'win32'});

  t.strictEqual(
    toExecutableName('bin'),
    'bin.exe',
    'should append `.exe` to the string on a Windows environment.'
  );

  Object.defineProperty(process, 'platform', {value: 'darwin'});

  t.strictEqual(
    toExecutableName('bin'),
    'bin',
    'should not modify the string on a non-Windows environment.'
  );

  t.throws(
    () => toExecutableName(['bin']),
    /TypeError.* is not a string. The first argument to to-executable-name must be a string\./,
    'should throw a type error when it takes a non-string argument.'
  );

  t.throws(
    () => toExecutableName(),
    /TypeError.* is not a string. The first argument to to-executable-name must be a string\./,
    'should throw a type error when it takes no arguments.'
  );
});
