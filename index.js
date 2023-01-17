import chalk from 'chalk';
import randomColor from 'randomcolor';

const userColor = process.argv[2];
const userLum = process.argv[3];
const chosenColor = randomColor({
  luminosity: userLum,
  hue: userColor,
});
const ranHex = randomColor();
const ranCol = chalk.hex(ranHex);
const userInput = (string) => {
  console.log(chalk.hex(chosenColor).italic(string));
};

if (process.argv[2] === undefined) {
  console.log(
    ranCol(`  ###############################
  ###############################
  ###############################
  #####                     #####
  #####        ${ranHex}      #####
  #####                     #####
  ###############################
  ###############################
  ###############################`),
  );
} else {
  userInput(`
  ###############################
  ###############################
  ###############################
  #####                     #####
  #####        ${chosenColor}      #####
  #####                     #####
  ###############################
  ###############################
  ###############################`);
}
