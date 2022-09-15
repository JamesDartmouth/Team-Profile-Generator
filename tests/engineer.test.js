const engineer = require('../lib/engineer');

describe('Engineer Test', () =>{
    it('should create a new engineer object',()=>{
        const temp = new engineer(1, 'james@gmail.com', 'james');

        expect(typeof temp).toBe('object');
    })

    it('should set a name via constructor',()=>{
        const temp = new engineer(1, 'james@gmail.com', 'james');

        expect(temp.name).toEqual('james');
    })

    it('should set a id via constructor',()=>{
        const temp = new engineer(1, 'james@gmail.com', 'james');

        expect(temp.id).toEqual(1);
    })
    it('should set a email via constructor',()=>{
        const temp = new engineer(1, 'james@gmail.com', 'james');

        expect(temp.email).toEqual('james@gmail.com');
    })
    it('should set a gitHub via constructor',()=>{
        const temp = new engineer(1, 'james@gmail.com', 'james', 'jamesDartmouth');

        expect(temp.gitHub).toEqual('jamesDartmouth');
    })
    it('should retrieve a gitHub with getGitHub() method',()=>{
        const temp = new engineer(1, 'james@gmail.com', 'james', 'jamesDartmouth');

        expect(temp.gitHub).toEqual('jamesDartmouth');
    })
    it('should retrieve email with getEmail() method',()=>{
        const temp = new engineer(1, 'james@gmail.com', 'james');

        expect(temp.getEmail()).toEqual('james@gmail.com');
    })
    it('should retrieve name with getName() method',()=>{
        const temp = new engineer(1, 'james@gmail.com', 'james');

        expect(temp.getName()).toEqual('james');
    })
    it('should retrieve id with getId() method',()=>{
        const temp = new engineer(1, 'james@gmail.com', 'james');

        expect(temp.getId()).toEqual(1);
    })
 
})