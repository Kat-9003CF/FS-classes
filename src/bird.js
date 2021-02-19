/* ----------------------
  - [ ] Create a totally new class called "Bird".
    - Create a new file for the class.
      - Don't forget to export it!
    - Create a new file for tests.
      - Don't forget to import the Bird class into this file.
      - Write quality tests.
    - Add at least two properties and two methods into the Bird class.

---------------------- */

const Animal = require("./animal");

class Bird extends Animal {
  constructor(name) {
    super(name);
    this.sound = "tweet";
    this.legs = 2;
    this.beak = true;
    this.colour = "green";
    this.nailTrims = 0;
  }
  trimNails() {
    this.nailTrims = this.age * 2;
    return this.nailTrims;
  }
}

module.exports = Bird;
