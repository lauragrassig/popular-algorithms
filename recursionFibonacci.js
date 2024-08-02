function fibonacci(n) {
  if (n < 2) {
    return n;
  }

  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(3));

// 6
// 5 + 4
// (4 + 3) + (3 + 2)
// (3 + 2) + (2 + 1) // (2 + 1) + (1 + 0) 
// (2 + 1) + (1 + 0) // (1 + 0) + 1 // (1 + 0) + 1 + 1
// + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1
// 8

// O(2^n)