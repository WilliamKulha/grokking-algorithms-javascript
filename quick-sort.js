const quickSort = (arr) => {
  if(arr.length < 2) {
    return arr;
  }
  else {
    let pivot = arr[0];
    let less = [];
    let greater = [];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] <= pivot) {
        less.push(arr[i]);
      } else if (arr[i] > pivot) {
        greater.push(arr[i]);
      }
    }
    return quickSort(less).concat(pivot).concat(quickSort(greater));
  }
}