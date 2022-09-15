// constructs an employer object with id, email and name and exports them to manager.js, engineer.js, and intern.js
// adds functions to retrieve id, email, name, and role, from employee objects

class employee{
    constructor (id, email, name){
        this.id = id;
        this.email = email;
        this.name = name;
    }

    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    getName() {
     return this.name;
    }

    getRole() {
        return 'employee';
    }
}


module.exports= employee;

