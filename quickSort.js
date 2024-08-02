function quickSort(arr) {
  if (arr.length < 2) {
    return arr;
  }

  let pivot = arr[arr.length - 1];
  let leftArray = [];
  let rightArray = [];

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      leftArray.push(arr[i])
    } else {
      rightArray.push(arr[i])
    }
  }

  return [...quickSort(leftArray), pivot, ...quickSort(rightArray)]
}

console.log(quickSort([-6, 20, 8, -2, 4]));

// pivot = 4;
// [-6, -2] [20, 8]  
//  [6] -2 []  | [] 8 [20]
// -6 -2 4 8 20
 