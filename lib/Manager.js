// creates manager object and exports this to index.js to add manager to manager array
// imports employee object and extends officeNumber key/value to add to manager object
// adds function to retrieve office number from manager object

const employee = require('./employee');

class manager extends employee {
    constructor (id, email, name, officeNumber){
        super(id, email, name);
        this.officeNumber = officeNumber
    }

    getOfficeNumber(){
        return this.officeNumber;
    }

    getRole() {
        return 'manager';
}
}
module.exports = manager;