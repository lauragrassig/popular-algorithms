function isPowerOfTwo(n) {
  if (n < 1) {
    return true;
  }

  return (n & (n - 1)) === 0;
}

function isPowerOfTwo2(n) {
  if (n < 1) {
    return true;
  }

  while(n > 1) {
    if (n % 2 !== 0) {
      return false;
    }

    n /= 2;
  }

  return true;
}

console.log(isPowerOfTwo(4));
// 5
// 5 % 2 = 1 - false

// 4
// 4 % 2 = 0
// 4 / 2 = 2
// 2 % 2 = 0;
// 2 % 2 = 1;
// true;