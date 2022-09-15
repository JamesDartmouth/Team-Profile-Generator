const intern = require('../lib/intern');

describe('Intern Test', () =>{
    it('should create a new intern object',()=>{
        const temp = new intern(1, 'james@gmail.com', 'james');

        expect(typeof temp).toBe('object');
    })

    it('should set a name via constructor',()=>{
        const temp = new intern(1, 'james@gmail.com', 'james');

        expect(temp.name).toEqual('james');
    })

    it('should set a id via constructor',()=>{
        const temp = new intern(1, 'james@gmail.com', 'james');

        expect(temp.id).toEqual(1);
    })
    it('should set a email via constructor',()=>{
        const temp = new intern(1, 'james@gmail.com', 'james');

        expect(temp.email).toEqual('james@gmail.com');
    })
    it('should set a school via constructor',()=>{
        const temp = new intern(1, 'james@gmail.com', 'james', 'dartmouth');

        expect(temp.school).toEqual('dartmouth');
    })
    it('should retrieve a school with getSchool() method',()=>{
        const temp = new intern(1, 'james@gmail.com', 'james', 'dartmouth');

        expect(temp.school).toEqual('dartmouth');
    })
    it('should retrieve email with getEmail() method',()=>{
        const temp = new intern(1, 'james@gmail.com', 'james');

        expect(temp.getEmail()).toEqual('james@gmail.com');
    })
    it('should retrieve name with getName() method',()=>{
        const temp = new intern(1, 'james@gmail.com', 'james');

        expect(temp.getName()).toEqual('james');
    })
    it('should retrieve id with getId() method',()=>{
        const temp = new intern(1, 'james@gmail.com', 'james');

        expect(temp.getId()).toEqual(1);
    })
 
})