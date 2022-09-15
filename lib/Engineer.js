// creates engineer object and exports this to index.js to add to engineer array
// imports employee object and extends github key/value to add to engineer object
// adds function to retrieve gitHub username from engineer object

const employee = require('./employee');

class engineer extends employee {
    constructor (id, email, name, gitHub){
        super(id, email, name);
        this.gitHub = gitHub;
    }

    getGitHub(){
        return this.gitHub;
    }

    
}

module.exports = engineer;