function euclidean(a, b) {
  if (b > a) {
    [a, b] = [b, a]
  }

  if (b === 0) {
    return a;
  } else {
    return euclidean(b, a % b);
  }
}

console.log(euclidean(105, 252));

// a = 900 b = 750 
// a = 750, b = 150 
// a = 150, b = 0
// 0, return 150


function gcd(a, b) {
  if (b > a) {
    [a, b] = [b, a];
  }

  while(b > 0) {
    [a, b] = [b, a % b];
  }

  return a;
}

console.log(gcd(105, 252));