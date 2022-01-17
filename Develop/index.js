// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = ["Enter your project title", "Write a description of your project", "Describe the installation instructions", 
                   "Write information about your project´s usage", "list the contribution guidelines", "Describe information about how to test your project", 
                   "Choose a license for your application", "Enter your GitHub username", "Enter your e-mail address"];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    const generateReadme = () =>
`# <Your-Project-Title>

## Description
    
Provide a short description explaining the what, why, and how of your project. Use the following questions as a guide:
- What was your motivation?
- Why did you build this project? (Note: the answer is not "Because it was a homework assignment.")
- What problem does it solve?
- What did you learn?
    
## Table of Contents (Optional)
    
If your README is long, add a table of contents to make it easy for users to find what they need.
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Questions](#questions)
    
    
## Installation
    
What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.
    
## Usage
    
Provide instructions and examples for use. Include screenshots as needed.

## Credits
    
List your collaborators, if any, with links to their GitHub profiles.
If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.
If you followed tutorials, include links to those here as well.
    
## License
    
The last section of a high-quality README file is the license. This lets other developers know what they can and cannot do with your project. If you need help choosing a license, refer to [https://choosealicense.com/](https://choosealicense.com/).
---
    
🏆 The previous sections are the bare minimum, and your project will ultimately determine the content of this document. You might also want to consider adding the following sections.
    
## Badges
    
![badmath](https://img.shields.io/github/languages/top/nielsenjared/badmath)
Badges aren't necessary, per se, but they demonstrate street cred. Badges let other developers know that you know what you're doing. Check out the badges hosted by [shields.io](https://shields.io/). You may not understand what they all represent now, but you will in time.
    
## Features
    
If your project has a lot of features, list them here.
    
## How to Contribute
    
If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own if you'd prefer.
    
## Tests
    
Go the extra mile and write tests for your application. Then provide examples on how to run them here.
    
## Questions
    `;
    
inquirer
  .prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?',
    },
    {
      type: 'input',
      name: 'location',
      message: 'Where are you from?',
    },
    {
      type: 'input',
      name: 'hobby',
      message: 'What is your favorite hobby?',
    },
    {
      type: 'input',
      name: 'food',
      message: 'What is your favorite food?',
    },
    {
      type: 'input',
      name: 'github',
      message: 'Enter your GitHub Username',
    },
    {
      type: 'input',
      name: 'linkedin',
      message: 'Enter your LinkedIn URL.',
    },
  ])
  .then((answers) => {
    const readmePageContent = generateReadme();

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

