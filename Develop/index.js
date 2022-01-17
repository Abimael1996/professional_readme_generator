// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = ["Enter your project title", "Write a description of your project", "Describe the installation instructions", 
                   "Write information about your project´s usage", "list the contribution guidelines", "Describe information about how to test your project", 
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
- [Credits](#credits)
- [License](#license)
- [Questions](#questions)
    
    
## Installation
    
${installation}
    
## Usage
    
${usage}
    
## License
    
${license}
    
## How to Contribute
    
${contribution}
    
## Tests
    
${test}

## Questions

${github}

${email}
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
        type: 'input',
        name: 'license',
        message: data[6],
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

