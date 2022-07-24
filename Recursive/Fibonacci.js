// 0, 1, 1, 2, 3, 5, 8, 13

// Recursive Approach

function recursiveFibonacci(input) {
  /* 
 if (input == 0) {
    return 0;
  }
  if (input == 1) {
    return 1;
  }
  */

  if (input < 2) {
    return 1;
  }
  return recursiveFibonacci(input - 1) + recursiveFibonacci(input - 2);
}

var input = 4;

var ans = recursiveFibonacci(input);
console.log(ans);

// Iterative Approach
function iterativeFibonacci(input) {
  arr = [0, 1];
  //   sum = 0;
  for (i = 0; i < input; i++) {
    sum = arr[i] + arr[i + 1]; //0 + 1
    arr.push(sum); //[0,1,1]
  }
  console.log(arr);
}

var input = 4;
iterativeFibonacci(input);
