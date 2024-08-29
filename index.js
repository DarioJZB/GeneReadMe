// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import colors from 'colors';

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
function writeToFile(fileName, data) {
   
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
                choices: ['choice 1', 'choice 2', 'choice 3', 'choice 4', 'choice 5'],
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
        console.log(answers);
    });
}

// Function call to initialize app
init();
