const Employee = require('../lib/Employee');

describe('Test Employee Class', () =>{
    it('should create a new employee object',()=>{
        const me = new Employee(1, 'james@gmail.com', 'james');

        expect(typeof me).toBe('object');
    })

    it('can set a name via constructor',()=>{
        const me = new Employee(1, 'james@gmail.com', 'james');

        expect(me.name).toEqual('james');
    })

    it('can set a id via constructor',()=>{
        const me = new Employee(1, 'james@gmail.com', 'james');

        expect(me.id).toEqual(1);
    })
    it('can set a email via constructor',()=>{
        const me = new Employee(1, 'james@gmail.com', 'james');

        expect(me.email).toEqual('james@gmail.com');
    })
    it('it can retrieve email with getEmail() method',()=>{
        const me = new Employee(1, 'james@gmail.com', 'james');

        expect(me.getEmail()).toEqual('james@gmail.com');
    })
    it('it can retrieve name with getName() method',()=>{
        const me = new Employee(1, 'james@gmail.com', 'james');

        expect(me.getName()).toEqual('james');
    })
    it('it can retrieve id with getId() method',()=>{
        const me = new Employee(1, 'james@gmail.com', 'james');

        expect(me.getId()).toEqual(1);
    })
    it('it can retrieve role with getRole() method',()=>{
        const me = new Employee(1, 'james@gmail.com', 'james');

        expect(me.getRole()).toEqual('Employee');
    })
})