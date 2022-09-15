// creates intern object and exports this to index.js to add to intern array
// imports employee object and extends school key/value to add to intern object
// adds function to retrieve school from intern object

const employee = require('./employee');

class intern extends employee {
    constructor (id, email, name, school){
        super(id, email, name);
        this.school = school
    }

    getSchool(){
        return this.school;
    }
    getRole() {
        return 'intern';
}
}
module.exports = intern;