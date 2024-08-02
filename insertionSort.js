function insertionSort(arr) {
  for (let i = 1; i < arr.length ; i ++) {
    let numberToInsert = arr[i];
    let indexOfTheSortedElement = i - 1;

    console.log(arr[indexOfTheSortedElement] > numberToInsert)
    while(numberToInsert >= 0 && arr[indexOfTheSortedElement] > numberToInsert) {
      arr[indexOfTheSortedElement + 1] = arr[indexOfTheSortedElement];
      indexOfTheSortedElement--;
    }
    arr[indexOfTheSortedElement + 1] = numberToInsert

    console.log(arr)
  }

  return arr;
}

console.log(insertionSort([-5, 10, 5, 3, 8]))

// i = 1; 
// nti = 10; se = 0
// - 5 > 10
// false
// 10 

// 2
// nti = 5; Se = 1; = 10;
// 10 > 5
// 5 = 10
// [-5, 10, 10, 3, 8]
// Se = 0;
// -5 > 5
// [-5, 5, 10, 3, 8]

// i = 3
// nti = 3; Se = 2
// 5 > 3 
// [-5, 10, 3, 3, 8];
