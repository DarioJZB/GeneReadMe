// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import colors from 'colors';
import fs from 'fs';

// TODO: Create an array of questions for user input
const questionsObject = {
    title: 'Please enter you project title: ',
    description: 'Enter a description of your poject: ',
    install: 'Enter installation instructions: ',
    usage: 'Enter usage information: ',
    contribution: 'Enter contribution guidelines: ',
    test: 'Enter test instructions: ',
    license: 'Choose a license from the following: ',
    username: 'Enter your GitHub username: ',
    email: 'Enter your email address:',
};


// TODO: Create a function to write README file
function writeToFile(fileName, answers) {
    const licenseArr = [
        {license: "MIT", badge: "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"},
        {license: "IBM", badge: "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)"},
        {license: "Eclipse", badge: "[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)"},
        {license: "Zlib", badge: "[![License: Zlib](https://img.shields.io/badge/License-Zlib-lightgrey.svg)](https://opensource.org/licenses/Zlib)"},
        {license: "Boost", badge: "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)"},
    ]

    let badge;
    let licenseChoice;

    for (let i = 0; i < licenseArr.length; i++) {
        if (licenseArr[i].license === answers.license){
            badge = licenseArr[i].badge;
            licenseChoice = licenseArr[i].license;
            break;
        }
    }
    const readMeText = `# ${answers.title}
${badge}
    
## Description
${answers.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${answers.install}

## Usage
${answers.usage}

## License
This project follows the ${licenseChoice} license.

## Contributing
${answers.contribution}

## Tests
${answers.test}

## Questions
Github profile: [${answers.username}](https://github.com/${answers.username})<br> 
For additional questions, please email me at <${answers.email}>`

    fs.writeFile(fileName, readMeText, (err) => {
        err ? console.error(err) : console.log("Your " + colors.red(answers.title) + " ReadMe was successfully created")
    })
}

// TODO: Create a function to initialize app
function init() {
    const questionsArray = [];
    for (const key in questionsObject) {
        if (key === 'license'){
            questionsArray.push({
                type: 'list',
                message: colors.blue(questionsObject[key]),
                name: key,
                choices: ['MIT', 'IBM', 'Eclipse', 'Zlib', 'Boost'],
            });
        } else {
            questionsArray.push({
                type: 'input',
                message: colors.blue(questionsObject[key]),
                name: key,
            })
        }
    } 
    inquirer
    .prompt(questionsArray)
    .then((answers) =>{
        const fileName = 'ReadMe.md';
        writeToFile(fileName, answers);
    });
}

// Function call to initialize app
init();
