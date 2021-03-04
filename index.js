// i use fs = require("fs"); becouse i want to read files in my folder
const fs = require("fs");
// i use inquire becouse i want to create a CLI and i want to put questions, validating user inputs, and doing stuff with the responses given. 
const inquirer = require('inquirer');
// i want to read the generator.js from assets
const generateMarkdown = require("./assets/generateMarkdown")
// These will be the questions that will appear after typing in the console npm index.js
const questions = [{
  //Project title.
  type: 'input',
  name: 'Title',
  message: 'What is the title of your project?',
}, 
{
  //Project description.
  type: 'input',
  name: 'Description',
  message: 'What is the description of your project?',
},
{
  //Project description.
  type: 'input',
  name: 'Video',
  message: 'What video would you like to add?',
},
{
  //Project description.
  type: 'input',
  name: 'Picture1',
  message: 'What picture would you like to add?',
},
{
  //get instalatiom for installing the project.
  type: 'input',
  name: "installation",
  message: 'What is the installation instructions of your project?',
},
{
  //What kind of tools did you use?
  type: 'input',
  name: 'Tools:',
  message: 'What kind of tools did you use?'
},
{
  // list a choise of licenses user can choose from
  type: "list",
  name: "license",
  massage: "What type of license for your project?",
  choices: ["MIT","Boost", "Apache", "Pearl"]
},
{
  //prompt the user how can somebody contribuite to the project
  type: "input",
  name: "Contributor",
  message: "Who contributed for this project?"
},
{
  //get user email address
  type: 'input',
  name: 'email',
  message: 'What is your email address?',
},
{
  //get user email address
  type: 'input',
  name: 'LinkedIn',
  message: 'Enter your LinkedIn profile?'
},
{
  //get user email address
  type: 'input',
  name: 'GitHub',
  message: 'Enter your your GitHub profile'
},
{
  //get user email address
  type: 'input',
  name: 'Page',
  message: 'Enter your your GitHub IO page'
},



];
  

      // Create a function writeToFile 
      // Have 2 parametres FileName and data
function writeToFile(fileName, data) {
      fs.writeFile(fileName, data, (err) => {
      if (err) throw err;
  });
  console.log("File README.md generated")
}

// Inquirer provides the user interface and the inquiry session flow.
// The prompt() method displays a dialog box that prompts the visitor for input.
function init() {
  inquirer.prompt(questions)
  .then(function(response) {
      writeToFile("README.md", generateMarkdown(response));
  })
}

// function call to initialize program
init();