const Engineer = require("../lib/Engineer");

test("creates engineer object", () => {
  const engineer = new Engineer("Buffy", 94043, "bsummers@sunnydalehigh.com", "bsummers");

  expect(engineer.name).toBe("Buffy");
  expect(engineer.id).toEqual(expect.any(Number));
  expect(engineer.email).toBe("bsummers@sunnydalehigh.com");
  expect(engineer.github).toBe("bsummers");
});
