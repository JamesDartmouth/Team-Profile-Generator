const inquirer = require('inquirer');

const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');

const managers = [];
const engineers = [];
const interns = [];


function createManager() {
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
            console.log(answers);
            const{id, email, name, officeNumber} = answers;
            managers.push(new Manager(id, email, name, officeNumber));
            createTeam();
        })
}


function createEngineer(){
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
        console.log(answers);
        const{id, email, name, gitHub} = answers;
        engineers.push(new Engineer(id, email, name, gitHub));
        createTeam();
    })
}


function createIntern(){
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
        console.log(answers);
        const{id, email, name, school} = answers;
        interns.push(new Intern(id, email, name, school));
        createTeam();
    })
}

function createTeam(){
    inquirer
        .prompt([
            {
                type: 'list',
                name: 'jobList',
                message: 'Which type of employee would you like to add?',  
                choices: ['Engineer', 'Intern', 'None']
            }, 
        ]).then(function(answers){
            console.log(answers);

            switch(answers.jobList){
                case 'Intern':
                    createIntern();
                    break;
                case 'Engineer':
                    createEngineer();    
                    break;
                default:
                    //generateHTML();
                    return;
            }
        });


}

createManager();