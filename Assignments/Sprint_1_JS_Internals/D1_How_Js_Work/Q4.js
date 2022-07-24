// Hoisting:-
/*
Hoisting is the default behavior of moving all the declarations 
at the top of the scope before code execution.
>>> Which options are applicable for the term hoisting '?
Hoisting is only possible with declaration but not the initialization.
*/

// var num;
// console.log(num);
// // num = 6;
// // var num = 6; // Declaration and Initialization

// // mutability and immutable :-
// var arr = [1, 2, 3, 4, 5];
// var str = "12345";

// arr[0] = 7;
// str[0] = 7;
// console.log(arr);
// console.log(str);

// // Reassignment:-
// /*
// we can simply reassign the new value to the variable.
// When we change the value of a variable, we do not use var again.
// We simply use the = to give the variable a new value
// */

// var n = 0;
// console.log(n);
// n = 7;
// console.log(n);

// Stack:-
//LIFO
/*
     5
     4
     3
     2
     1
*/

var table = [1, 2, 3, 4, 5];

table.push(7); //Adding of element at top
table.pop(); // Removing of element at top

console.log(table);
