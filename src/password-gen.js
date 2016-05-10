#!/usr/bin/env node
const Alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

/** Creates a password generator that has sections of passwords */
function sectionGenPassword(gen, numParts, separator) {
    return function(alphabet, len) {
        const parts = [];

        for (var i = 0; i < numParts; i++) {
            parts.push(gen(alphabet, len));
        }

        return parts.join(separator);
    }
}

/** Generates a password by getting random chars from alphabet */
function genPassword(alphabet, len) {
    var pass = '';

    for (var i = 0; i < len; i++) {
        pass += alphabet[Math.floor(Math.random() * alphabet.length)];
    }

    return pass;
}

exports.Alphabet = Alphabet;
exports.genPassword = genPassword;
exports.sectionGenPassword = sectionGenPassword;
