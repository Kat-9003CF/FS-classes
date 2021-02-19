const { expect } = require("chai");
const { isClass } = require("./utilities");
const Bird = require("../src/bird");

let bird = null;

describe("Birds", () => {
  beforeEach(() => {
    bird = new Bird();
  });

  describe("The Bird class", () => {
    it("should be a class", () => {
      expect(isClass(Bird)).to.be.true;
    });

    it("should have properties for beak and colour", () => {
      expect(bird.hasOwnProperty("beak")).to.equal(true);
      expect(bird.hasOwnProperty("colour")).to.equal(true);
    });

    it("should have the correct properties for sound and legs for a bird", () => {
      expect(bird.sound).to.equal("tweet");
      expect(bird.legs).to.equal(2);
    });

    it("should get two nail trims per year", () => {
      bird.getOlder();
      bird.getOlder();
      bird.trimNails();
      expect(bird.nailTrims).to.equal(4);
    });
  });
});
