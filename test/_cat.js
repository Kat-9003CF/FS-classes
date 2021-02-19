const { expect } = require("chai");
const { isClass } = require("./utilities");
const Cat = require("../src/cat");

let cat = null;

describe("Cat", () => {
  beforeEach(() => {
    cat = new Cat();
  });

  describe("The Cat class", () => {
    it("should be a class", () => {
      expect(isClass(Cat)).to.be.true;
    });

    it("should have the property favourite food", () => {
      expect(cat.hasOwnProperty("favouriteFood")).to.equal(true);
    });

    it('should return the sound "meow" when called', () => {
      expect(cat.speak()).to.equal("meow");
    });

    it("Age 1 should give a cat age of 15", () => {
      cat.getOlder();
      expect(cat.age).to.equal(15);
      expect(cat.humanYears).to.equal(1);
    });

    it("Age 2 should give a cat age of 24", () => {
      cat.getOlder();
      cat.getOlder();
      expect(cat.age).to.equal(24);
      expect(cat.humanYears).to.equal(2);
    });

    it("should age 4 years each year thereafter", () => {
      cat.getOlder();
      cat.getOlder();
      cat.getOlder();
      expect(cat.age).to.equal(28);
    });

    it("should increase treats by 1", () => {
      cat.feed();
      expect(cat.treats).to.equal(1);
    });
  });
});
