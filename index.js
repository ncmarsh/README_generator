const inquirer = require("inquirer");
const mdFile = require("./utils/generateMarkdown.js")
const fs = require("fs");

// Array of questions for user to answer
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
        message: "Anything a user should know about using your project?",
        name: "usage"
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
        message: "How can a user contribute to your project?",
        name: "contribution"
    },
    {
        type: "list",
        message: "What kind of license will your project have?",
        name: "license",
        choices: [
            "Apache 2.0",
            "GNU GPL",
            "MIT",
            "Mozilla Public License",
            "The Unilicense"
        ]
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
