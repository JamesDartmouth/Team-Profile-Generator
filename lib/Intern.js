const Employee = require('./Employee');

class Intern extends Employee {
    constructor (id, email, name, school){
        super(id, email, name);
        this.school = school
    }

    getSchool(){
        return this.school;
    }
}

module.exports = Intern;