
// Brings in: 1) fs to write html 2) inquirer for question prompts 3) create HTML template from helper template in src folder 4) engineer, manager and intern javascript data from lib folder

const fs = require('fs');
const inquirer = require('inquirer');

const engineer = require('./lib/engineer');
const manager = require('./lib/manager');
const intern = require('./lib/intern');
const createHTML = require('./src/createHTML')

//Creates an empty array for new managers, engineers and interns

const managerArr = [];
const engineerArr = [];
const internArr = [];

// creates a new manager from the terminal inquirer prompts, pushes object into manager array and runs function newTeam()..i.e.inquirer prompts to add more team members.

function newManager() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: 'What is the Manager\'s name?'
            },
            {
                type: 'input',
                name: 'id',
                message: 'What is the Manager\'s id?'
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is the Manager\'s email?'
            },
            {
                type: 'input',
                name: 'officeNumber',
                message: 'What is the Manager\'s office number?'
            },
        ]).then(function(answers){
            const{id, email, name, officeNumber} = answers;
            managerArr.push(new manager(id, email, name, officeNumber));
            newTeam();
        })
}

// creates a new engineer from the terminal inquirer prompts, pushes object into engineer array and runs function newTeam()..i.e.inquirer prompts to add more team members, if needed.

function newEngineer(){
    inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the Engineer\'s name?'
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the Engineer\'s id?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the Engineer\'s email?'
        },
        {
            type: 'input',
            name: 'gitHub',
            message: 'What is the Engineer\'s github username?'
        },
    ]).then(function(answers){
        const{id, email, name, gitHub} = answers;
        engineerArr.push(new engineer(id, email, name, gitHub));
        newTeam();
    })
}

// creates a new intern from the terminal inquirer prompts, pushes object into intern array and runs function newTeam()..i.e.inquirer prompts to add more team members if needed.

function newIntern(){
    inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the Intern\'s name?'
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the Intern\'s id?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the Intern\'s email?'
        },
        {
            type: 'input',
            name: 'school',
            message: 'Where did the Intern go to school?'
        },
    ]).then(function(answers){
        const{id, email, name, school} = answers;
        internArr.push(new intern(id, email, name, school));
        newTeam();
    })
}

//function to create new team members using a switch to run appropriate team member function (another intern or engineer, there is only one manager)...
// or no new team members which runs a function to create new team profile HTML(no more team members to add) 

function newTeam(){
    inquirer
        .prompt([
            {
                type: 'list',
                name: 'employeeRole',
                message: 'Which type of employee would you like to add?',  
                choices: ['engineer', 'intern', 'none']
            }, 
        ]).then(function(answers){
            switch(answers.employeeRole){
                case 'intern':
                    newIntern();
                    break;
                case 'engineer':
                    newEngineer();    
                    break;
                default:
                    fs.writeFileSync('./dist/team.html', createHTML({ managerArr, engineerArr, internArr}));
                    return;
            }
        });


}

// calls the newManager function to start building team starting with the manager

newManager();