/* splice():-

 This method is used to add/remove an item from the given array.
 The parameter ‘i’ denotes the starting index, ‘n’ denotes the number of items to be removed
 from the specified starting index.‘item 1, item 2, …..item n’ represents
 the list of new items to be added at the given index. If n=0, no item is removed, the new items
 are just added to the specified starting index.*/

/* Syntax:-
splice():
array_name.splice(i, n, item 1, item 2, .....item n) */

// Example 1: Now let us just add some more items but not remove any item.

var cars = ["Benz", "Innova", "Breeza", "Etios", "Dzire"];

cars.splice(2, 0, "ambassedor", "BMW", "Audi");

console.log("cars :", cars);

/*
O/P >> cars : [
  'Benz',       'Innova',
  'ambassedor', 'BMW',   
  'Audi',       'Breeza',
  'Etios',      'Dzire'  
]
*/

console.log("----------------Another splice()----------------");

// Example 2: Removing one element and not adding any new item.

var cars1 = [
  "Benz",
  "Innova",
  "ambassedor",
  "BMW",
  "Audi",
  "Breeza",
  "Etios",
  "Dzire",
];

cars1.splice(2, 1);

console.log("cars1 :", cars1);

/*
O/P >> cars1 : [
  'Benz',   'Innova',
  'BMW',    'Audi',
  'Breeza', 'Etios',
  'Dzire'
*/

console.log("******************************************");

/* slice():-

 This method is used to get a new array by selecting a sub-array of a given array.
 The parameter ‘s’ indicates the starting index and ‘e’ indicates the ending index.
 They denote the index of the sub-array to be taken. By default, the value for start is ‘0’ and end is ‘n’. */

/* Syntax:-
 slice():
 array_name.slice(s, e) */

// Example 1: Both the start and end are specified.

var cars2 = ["Benz", "Innova", "Breeza", "Etios", "Dzire"];

var new_cars2 = cars2.slice(1, 4);

console.log("cars2 :", cars2);

console.log("new_cars2 :", new_cars2);

/*
O/P >> cars2 : [ 'Benz', 'Innova', 'Breeza', 'Etios', 'Dzire' ]

O/P >> new_cars2 : [ 'Innova', 'Breeza', 'Etios' ]
*/

console.log("----------------Another slice()----------------");

// Example 2: only the start is specified. The end is by default the length of the array.

var cars3 = ["Benz", "Innova", "Breeza", "Etios", "Dzire"];

var new_cars3 = cars.slice(2);

console.log("cars3 :", cars3);

console.log("new_cars3 :", new_cars3);

/*
O/P >> cars3 : [ 'Benz', 'Innova', 'Breeza', 'Etios', 'Dzire' ]
new_cars3: ['ambassedor', 'BMW', 'Audi', 'Breeza', 'Etios', 'Dzire']
*/

console.log("**********************************************************");

// Object.freeze():-
/* Object.freeze() prevents mutability.*/

/* Object.freeze() method:- If you want the value of the person object to be immutable,
   you have to freeze it by using the Object.freeze() method. */

// Example 1:

const person = Object.freeze({ name: "Shivanand" });

// TypeError
person.name = "Shiva";

console.log(person);

/*
O/P >> { name: 'Shivanand' }
*/

/* The Object.freeze() method is shallow, meaning that it can freeze the properties of the object,
   not the objects referenced by the properties. */

console.log("----------------Another Object.freeze()----------------");

// Example 2:

const person1 = Object.freeze({
  name: "Shivanand",
  address: {
    city: "Nashik",
  },
});

/* But the person.address object is not immutable,
   you can add a new property to the person.address object as follows: */

// No TypeError
person1.address.country = "India";

console.log(person1);

/*
O/P >> { name: 'Shivanand', address: { city: 'Nashik', country: 'India' } }
*/
console.log("**********************************************************");

// const:-
/* const prevents reassignment. */

/* const: The const keyword creates a read-only reference to a value.
   Variables created by the const keyword are immutable.
   In other words, you can’t reassign them to different values.
   Trying to reassign a constant variable will result in a TypeError. */

// Example 1:

let myName = "Shivanand";
console.log(myName);

// Uncaught TypeError
myName = "Shiva";

/*
O/P >> Shivanand
*/

/* The const keyword ensures that the variable created is read-only.
   But It doesn’t mean that the actual value to which the const variable reference is immutable.
   Even though the person variable is constant. However, you can change the value of its property.
   But you cannot reassign a different value to the person constant. */

console.log("----------------Another const----------------");

// Example 2:

const person3 = {
  name: "Shivanand",
};

// No TypeError
person3.name = "Shiva";
console.log(person3.name);

/*
O/P >> Shiva */
