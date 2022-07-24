// // // ES6 class

// // class Person {
// //   constructor(n, s) {
// //     this.name = n;
// //     this.sports = s;
// //   }
// // }
// // let p1 = new Person("Pablo", "polo");
// // console.log("p1:", p1);

// // Inheritance

// class Car {
//   constructor(n, b) {
//     this.name = n;
//     this.brand = b;
//   }
// }

// // let c1 = new Car("Duster", "Renault");
// // console.log("c1:", c1);

// class SUV extends Car {
//   constructor(n, b, o, t) {
//     super(n, b);
//     this.owner = o;
//     this.type = t;
//   }
// }

// let c2 = new SUV("Duster", "Renault", "Pablo", "SUV");
// console.log("c2:", c2);

// Q2 :-
// class Cat {
//   constructor(n, s, v) {
//     this.name = n;
//     this.size = s;
//     this.speed = v;
//   }
// }

// class Tiger extends Cat {
//   constructor(n, s, v, n1, s1, v1) {
//     super(n, s, v);
//     this.name1 = n1;
//     this.size2 = s1;
//     this.speed3 = v1;
//   }
// }

// let c2 = new Tiger("Meau", "Small", "Slow", "King", "Big", "High");
// console.log("c2:", c2);

// 1. Initialization
class Stack {
  constructor() {
    this.length = 0;
    this.Stack = [];
  }

  push(v) {
    this.Stack.push(v);
    this.length++;
  }

  pop() {
    this.Stack.pop();
    this.length--;
  }
}

let s1 = new Stack();

s1.push("Atomic Habits");

s1.push("Wings of Fire");

s1.push("2 mistake of my life");

s1.pop();
console.log("s1:", s1);
