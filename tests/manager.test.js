const manager = require('../lib/manager');

describe('Manager Test', () =>{
    it('should create a new manager object',()=>{
        const temp = new manager(1, 'james@gmail.com', 'james');

        expect(typeof temp).toBe('object');
    })

    it('should set a name via constructor',()=>{
        const temp = new manager(1, 'james@gmail.com', 'james');

        expect(temp.name).toEqual('james');
    })

    it('should set a id via constructor',()=>{
        const temp = new manager(1, 'james@gmail.com', 'james');

        expect(temp.id).toEqual(1);
    })
    it('should set a email via constructor',()=>{
        const temp = new manager(1, 'james@gmail.com', 'james');

        expect(temp.email).toEqual('james@gmail.com');
    })
    it('should set an office number via constructor',()=>{
        const temp = new manager(1, 'james@gmail.com', 'james', '123');

        expect(temp.officeNumber).toEqual('123');
    })
    it('should retrieve an office number with getOfficeNumber method',()=>{
        const temp = new manager(1, 'james@gmail.com', 'james', '123');

        expect(temp.officeNumber).toEqual('123');
    })
    it('should retrieve email with getEmail() method',()=>{
        const temp = new manager(1, 'james@gmail.com', 'james');

        expect(temp.getEmail()).toEqual('james@gmail.com');
    })
    it('should retrieve name with getName() method',()=>{
        const temp = new manager(1, 'james@gmail.com', 'james');

        expect(temp.getName()).toEqual('james');
    })
    it('should retrieve id with getId() method',()=>{
        const temp = new manager(1, 'james@gmail.com', 'james');

        expect(temp.getId()).toEqual(1);
    })
 
})