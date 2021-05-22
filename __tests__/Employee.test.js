const Employee = require('../lib/Employee');

test('creates employee object', () => {
   const employee = new Employee('Buffy', 94043, 'bsummers@sunnydalehigh.com');

   expect(employee.name).toBe('Buffy');
   expect(employee.id).toEqual(expect.any(Number));
   expect(employee.email).toBe('bsummers@sunnydalehigh.com');
});