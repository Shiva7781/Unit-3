function FactorialIterative(input) {
  ans = 1;
  while (input > 0) {
    ans *= input;
    input--;
  }
  console.log(ans);
}

var input = 6;
FactorialIterative(input); 
