/* ----------------------

Note: BEFORE tackling each question below,
write related tests in the test file.

1. Update the sound property to "meow".
2. Create one additional property (your choice).
3. Update the getOlder method so that it
   increases the age by cat years each time
   it is called. Cat years are a bit complex:
   cats are 15 years by age 1, 24 years by age 2,
   and then only increase by 4 years every
   subsequent year.
4. Create one additional method (your choice).

---------------------- */

const Animal = require("./animal");

class Cat extends Animal {
  constructor(name) {
    super(name);
    this.sound = "meow";
    this.favouriteFood = "cat food";
    this.humanYears = 0;
    this.treats = 0;
  }
  speak() {
    return this.sound;
  }
  getOlder() {
    if (this.humanYears === 0) {
      this.age = 15;
      this.humanYears++;
    } else if (this.humanYears === 1) {
      this.age = 24;
      this.humanYears++;
    } else {
      this.age += 4;
      this.humanYears++;
    }
    return this.age;
  }

  feed() {
    this.treats++;
    return this.treats;
  }
}

module.exports = Cat;
