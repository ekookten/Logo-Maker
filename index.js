const inquirer = require('inquirer');
const Logo = require('./Lib/logo');

inquirer.prompt([
    {
        type: 'input',
        name: 'text',
        message: 'Enter text for the logo (up to 3 characters):',
        validate: input => input.length <= 3 || 'Text must be up to 3 characters.'
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'Enter the text color (color keyword or hexadecimal):',
    },
    {
        type: 'list',
        name: 'shape',
        message: 'Choose a shape for the logo:',
        choices: ['Circle', 'Triangle', 'Square']
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'Enter the shape color (color keyword or hexadecimal):',
    }
]).then(answers => {
    const logo = new Logo(answers.text, answers.textColor, answers.shape, answers.shapeColor);
    logo.saveToFile('logo.svg');
});
