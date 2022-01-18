// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = ["Enter your project title", "Write a description of your project", "What command should be ran to install dependencies?", 
                   "Write information about your project´s usage", "list the contribution guidelines", "What command should be ran to run tests?", 
                   "Choose a license for your application", "Enter your GitHub username", "Enter your e-mail address"];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    const generateReadme = ({ title, description, installation, usage, contribution, test, license, github, email }) =>
`# ${title}

## Description
    
${description}
    
## Table of Contents (Optional)
    
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Questions](#questions)
    
    
## Installation

In order to install dependencies, run the following command: 

    ${installation}
    
## Usage
    
${usage}
    
## License
    
${license}
    
## How to Contribute
    
${contribution}
    
## Tests

In order to run tests, run the following command: 

    ${test}

## Questions

GitHub: [Abimael1996](https://github.com/${github})

E-mail: [abimael.monarrez58@gmail.com](mailto:${email})
    `;
    
inquirer
  .prompt([
    {
      type: 'input',
      name: 'title',
      message: data[0],
    },
    {
      type: 'input',
      name: 'description',
      message: data[1],
    },
    {
      type: 'input',
      name: 'installation',
      message: data[2],
    },
    {
      type: 'input',
      name: 'usage',
      message: data[3],
    },
    {
      type: 'input',
      name: 'contribution',
      message: data[4],
    },
    {
      type: 'input',
      name: 'test',
      message: data[5],
    },
    {
        type: 'list',
        name: 'license',
        message: data[6],
        choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"]
      },
      {
        type: 'input',
        name: 'github',
        message: data[7],
      },
      {
        type: 'input',
        name: 'email',
        message: data[8],
      },
  ])
  .then((answers) => {
    const readmePageContent = generateReadme(answers);

    fs.writeFile(fileName, readmePageContent, (err) =>
      err ? console.log(err) : console.log('Successfully created README file!')
    );
  });
    
}

// TODO: Create a function to initialize app
function init() {
    writeToFile("README.md", questions)
}

// Function call to initialize app
init();

