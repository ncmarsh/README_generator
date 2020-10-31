// function to generate markdown for README
function generateMarkdown(response) {
  return `# ${response.title}

## Description
${response.description}

## Table of Contents

1. [Description](#Description)
1. [Usage](#Usage)
1. [Installation](#Installation)
1. [License](#License)
1. [Test](#Test)
1. [Contribution](#Contribution)
1. [Questions](#Questions)

## Usage
${response.usage}

## Installation
${response.installation}

## Contribution
${response.contribution}

## Test
${response.test}

## License
${response.license}

## Questions
GitHub: @${response.username}
Email: ${response.email}
`;
}

module.exports = generateMarkdown;
