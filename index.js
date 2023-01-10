import chalk from 'chalk';
import randomHex from 'random-hex';

const ranHex = randomHex.generate();
const ranCol = chalk.hex(ranHex);

console.log(
  ranCol(`
###############################
###############################
###############################
#####                     #####
#####        ${ranHex}      #####
#####                     #####
###############################
###############################
###############################`),
);
