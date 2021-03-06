// function to generate markdown for README
function generateMarkdown(response) {
  return `# ${response.title}
  
![License](<https://img.shields.io/static/v1?label=license&message=${response.license}&color=brightgreen>)

## Description
${response.description}

## Table of Contents

1. [Description](#Description)
1. [Usage](#Usage)
1. [Installation](#Installation)
1. [Tests](#Tests)
1. [Contribution](#Contribution)
1. [License](#License)
1. [Questions](#Questions)

## Usage
${response.usage}

## Installation
In order to use this project, please use the following command:

    ${response.installation}

## Tests
In order to test this project, please use the following command:

    ${response.test}

## Contribution
If you are interested in contributing to my project, please note:

${response.contribution}

## License
${response.license}

## Questions
If you have any questions about my project, I can be reached via:

GitHub: [@${response.username}](https://github.com/${response.username})

Email: ${response.email}
`;
}

module.exports = generateMarkdown;
