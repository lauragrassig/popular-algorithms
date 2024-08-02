function binarySearch(arr, target) {
  let leftIndex = 0;
  let rightIndex = arr.length - 1;

  while (leftIndex <= rightIndex) {
    const middle = Math.floor((leftIndex + rightIndex) / 2);

    if (arr[middle] === target) {
      return middle;
    }

    if (arr[middle] > target) {
      rightIndex = middle - 1;
    } else {
      leftIndex = middle + 1;
    }
  }

  return -1;
}

console.log(binarySearch([-5, -3, 4, 7, 10], -3));