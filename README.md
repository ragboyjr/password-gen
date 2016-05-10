# Simple Password Generator

Simple password generator for generating random passwords.

## CLI Usage

`./bin/password.js`

## Usage

```js
const passwordGen = require('password-gen');

// generate a random password from the default alphabet
console.log(passwordGen.genPassword(passwordGen.Alphabet, 8));
// L8GrxhlN

// generate a sectioned password
const gen = passwordGen.sectionGenPassword(passwordGen.genPassword, 4, '-');
console.log(gen(passwordGen.Alphabet, 3));
// cG2-M01-Wzd-5yH
```
