const { expect } = require('@jest/globals');
const Manager = require('../lib/Manager');

test('creates manager object', () => {
   const manager = new Manager("Buffy", 94043, "bsummers@sunnydalehigh.com", 510);

   expect(manager.name).toBe("Buffy");
   expect(manager.id).toEqual(expect.any(Number));
   expect(manager.email).toBe("bsummers@sunnydalehigh.com");
   expect(manager.officeNumber).toEqual(expect.any(Number));
})