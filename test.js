'use strict';

const test = require('tape');
const toExecutableName = require('.');

test('toExecutableName', t => {
  t.plan(7);

  t.equal(toExecutableName.name, 'toExecutableName', 'should have a function name.');

  Object.defineProperty(process, 'platform', {value: 'win32'});

  t.strictEqual(
    toExecutableName('bin'),
    'bin.exe',
    'should append `.exe` to the string on a Windows environment.'
  );

  t.strictEqual(
    toExecutableName('bin', {win32Ext: '.bat'}),
    'bin.bat',
    'should change the extension according to `win32Ext` option.'
  );

  Object.defineProperty(process, 'platform', {value: 'darwin'});

  t.strictEqual(
    toExecutableName('bin'),
    'bin',
    'should not modify the string on a non-Windows environment.'
  );

  t.throws(
    () => toExecutableName(['bin']),
    /TypeError.*Expected a binary name \(<string>\), but got a non-string value bin\./,
    'should throw a type error when it takes a non-string argument.'
  );

  t.throws(
    () => toExecutableName('bin', {win32Ext: 1}),
    /TypeError.*Expected `win32Ext` option to be a file extension for Windows executables.*but got a non-string value 1\./,
    'should throw a type error when it takes a non-string argument.'
  );

  t.throws(
    () => toExecutableName(),
    /TypeError.*Expected a binary name \(<string>\), but got a non-string value undefined\./,
    'should throw a type error when it takes no arguments.'
  );
});
