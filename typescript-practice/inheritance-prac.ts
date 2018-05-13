// ES6
class Bird {
    constructor(weight, height) {
      this.weight = weight;
      this.height = height;
    }
    walk() {
      console.log('walk!');
    }
  }
  
  class Penguin {
    constructor(bird) {
      this.bird = bird;
    }
    walk() {
      this.bird.walk();
    }
    swim() {
      console.log('swim!');
    }
  }
  
  let bird = new Bird(1,1);
  let penguin = new Penguin(bird);
  penguin.walk(); //walk!
  penguin.swim(); //swim!
  console.log("done");