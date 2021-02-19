const { expect } = require("chai");
const { isClass } = require("./utilities");
const Poodle = require("../src/poodle");

let poodle = null;

describe("Poodles", () => {
  beforeEach(() => {
    poodle = new Poodle();
  });

  describe("The Poodle class", () => {
    it("should be a class", () => {
      expect(isClass(Poodle)).to.be.true;
    });

    it('breed should equal "poodle"', () => {
      expect(poodle.breed).to.equal("Poodle");
    });

    it("lifetime haircuts should equal age x 7", () => {
      poodle.lifetimeHaircuts();
      expect(poodle.haircuts).to.equal(poodle.age * 7);
    });

    it("lifetime haircuts should equal age x 7", () => {
      poodle.getOlder();
      poodle.lifetimeHaircuts();
      expect(poodle.haircuts).to.equal(poodle.age * 7);
    });
  });
});
