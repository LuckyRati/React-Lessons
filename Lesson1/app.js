// Task N1

const nums = [-2, 4, -6, 8, -10, 12, -14, 16];

const positiveNums = nums.filter(num => num > 0);

const sum = positiveNums.reduce((acc, num) => acc + num, 0);

console.log(sum);




// Task N2

const array = ['a', 'b', 'c', 'a', 'b', 'b', 'b', 'b', 'c'];

const count = array.reduce((obj, str) => {
  if (str in obj) {
    obj[str]++;
  } else {
    obj[str] = 1;
  }
  return obj;
}, {});

console.log(count);



// Task N3

class Car {
  constructor(brand, model) {
    this.brand = brand;
    this.model = model;
    this.speed = 0;
    this.motion = "The car is not moving";
  }

  check_motion() {
    if (this.speed > 0) {
      this.motion = "The car is moving";
    } else {
      this.motion = "The car is stopped";
    }
  }

  accelerate(speed) {
    this.speed += speed;
    this.check_motion();
  }

  brake(speed) {
    this.speed = Math.max(0, this.speed - speed);
    this.check_motion();
  }

  emergency_brake() {
    this.speed = 0;
    this.motion = "The car is stopped";
  }

  status() {
    return `Vehicle ${this.brand} ${this.model} is moving at ${this.speed} km/h and status is ${this.motion}.`;
  }
}

const myCar = new Car("Ford", "Mustang");
console.log(myCar.status());

myCar.accelerate(50);
console.log(myCar.status());

myCar.brake(20);
console.log(myCar.status());

myCar.emergency_brake();
console.log(myCar.status());




// Task N4

function addAsync(x, y) {
  return new Promise((resolve, reject) => {
    if (typeof x === 'number' && typeof y === 'number') {
      resolve(x + y);
    } else {
      reject('Both parameters must be numbers');
    }
  });
}

addAsync(4, 6)
  .then(result => console.log(result))
  .catch(error => console.error(error));

addAsync(1, '8')
  .then(result => console.log(result))
  .catch(error => console.error(error));

addAsync(undefined, 7)
  .then(result => console.log(result))
  .catch(error => console.error(error));

addAsync(5)
  .then(result => console.log(result))
  .catch(error => console.error(error));
