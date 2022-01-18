// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "None") {
    return `![GitHub license](https://img.shields.io/badge/license-${license.split(" ").join("")}-blue) \n`;
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "None") {
    return "- [License](#license) \n";
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "None") {
    return `\n ## License \n \n This project is licensed under the ${license} license. \n`;
  } else {
    return "";
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}
## Description
    
${data.description}
    
## Table of Contents (Optional)
    
- [Installation](#installation)
- [Usage](#usage)
- [Questions](#questions)
${renderLicenseLink(data.license)}    
## Installation

In order to install dependencies, run the following command: 

    ${data.installation}
    
## Usage
    
${data.usage}
${renderLicenseSection(data.license)}
## How to Contribute
    
${data.contribution}
    
## Tests

In order to run tests, run the following command: 

    ${data.test}

## Questions

If you have any questions, open an issue or contact me directly at ${data.email}. You can find more of my work at [Abimael1996](https://github.com/${data.github}).

`;
}

module.exports = generateMarkdown;
