function factorial(n) {
  if (n < 2) {
    return n;
  }

  return n * factorial(n - 1);
}

console.log(factorial(6))

// 6
// 6 * 
// 5 * 
// 4 *
// 3 *
// 2 *
// return
