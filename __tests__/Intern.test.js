const Intern = require("../lib/Intern");

test("creates Intern object", () => {
  const intern = new Intern("Buffy", 94043, "bsummers@sunnydalehigh.com", "Sunnydale High");

  expect(intern.name).toBe("Buffy");
  expect(intern.id).toEqual(expect.any(Number));
  expect(intern.email).toBe("bsummers@sunnydalehigh.com");
  expect(intern.school).toBe("Sunnydale High");
});
