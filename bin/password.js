#!/usr/bin/env node
const passwordGen = require('../index');

function main(argv) {
    if (argv.length < 3) {
        console.log('usage: %s <num-parts> <part-len> <parts-seperator>', argv[0]);
        process.exit(1);
    }

    const numParts = argv[1];
    const partLen = argv[2];
    const partsSep = argv[3];

    const gen = passwordGen.sectionGenPassword(passwordGen.genPassword, numParts, partsSep);

    console.log("Generated password: %s", gen(passwordGen.Alphabet, partLen));
}

main(process.argv.slice(1));
