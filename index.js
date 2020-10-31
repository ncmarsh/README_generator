const inquirer = require("inquirer");
const mdFile = require("./utils/generateMarkdown.js")
const fs = require("fs");

// Array of questions for user
const questions = [
    {
        type: "input",
        message: "What is the title of your project?",
        name: "title"
    },
    {
        type: "input",
        message: "Please describe your project.",
        name: "description"
    },
    {
        type: "input",
        message: "What command should be entered to install any dependencies?",
        name: "installation",
        default: "npm i"
    },
    {
        type: "input",
        message: "What command should be entered to run tests?",
        name: "test",
        default: "npm test"
    },
    {
        type: "input",
        message: "Anything a user should know about using your project?",
        name: "usage"
    },
    {
        type: "list",
        message: "What kind of license will your project have?",
        name: "license",
        choices: [
            "Apache License 2.0",
            "GNU General Public License",
            "MIT License",
            "Mozilla Public License",
            "The Unilicense"
        ]
    },
    {
        type: "input",
        message: "How can a user contribute to your project?",
        name: "contribution"
    },
    {
        type: "input",
        message: "What is your GitHub username?",
        name: "username"
    },
    {
        type: "input",
        message: "What is your email address?",
        name: "email"
    }
];

// function to write README file
function writeToFile(response) {
    fs.writeFile("./created/README.md", mdFile(response), function(err) {
        if (err) {
            return console.log(err);
        }
        console.log("Success!");
        console.log(response);
        // mdFile(response);
    })
}

// function to initialize program
function init() {
    inquirer.prompt(questions)
    .then(function(response) {
        console.log(response);

        writeToFile(response);
    })
}

// function call to initialize program
init();



// ```md
// GIVEN a command-line application that accepts user input
// WHEN I am prompted for information about my application repository
// THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
// WHEN I enter my project title
// THEN this is displayed as the title of the README
// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README
// ```