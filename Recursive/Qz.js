function printArray(arr, n, cur) {
  if (cur == n) {
    return n;
  }
  console.log(arr[cur]);
  printArray(arr, n, cur + 1);
}

var cur = 0;
var n = 5;
var arr = [2, 4, 3, 5, 1];
ans = printArray(arr, n, cur);
console.log(ans);
