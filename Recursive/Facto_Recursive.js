function FactorialRecursion(n) {
  if (n == 1) {
    return 1;
  }
  return n * FactorialRecursion(n - 1);
}

var n = 12;
ans = FactorialRecursion(n); 
console.log(ans);
