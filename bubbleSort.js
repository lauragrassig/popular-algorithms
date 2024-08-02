function bubbleSort(arr) {
  let swapped;

  do {
    swapped = false;
    for(let i = 0; i < arr.length - 1; i ++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i + 1];
        arr[i + 1] = arr[i];
        arr[i] = temp;
        swapped = true;
      }
    }
  } while (swapped);

  return arr;
}

console.log(bubbleSort([3, 5, -3, 2, 1]))