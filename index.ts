#! /usr/bin/env node

import inquirer  from "inquirer";
import chalk from "chalk";

console.log(chalk.grey.bold(`---------${chalk.magentaBright.bold("Word Counter")}---------`));

do{
let answers = await inquirer.prompt([{
     name: "Sentence",
     type: "input",
     message: "Enter your Sentence to count the words",
}])

const word = answers.Sentence.trim().split(" ").filter(Boolean);
console.log(chalk.cyanBright.bold(`${word}`));
console.log(chalk.grey.bold(`Your sentence word count is ${chalk.yellowBright.bold(word.length)}`));
}while(true);