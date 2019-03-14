const findBiggestNumber = (arr) => {
  
  if (arr.length === 2) {
    if (arr[0] > arr[1]) {
      return arr[0];
    } else {
      return arr[1];
    }
  } else {
    if (arr[0] < arr[1]) {
      arr.shift();
      return findBiggestNumber(arr);
    } else {
      arr.splice(1, 1);
      return findBiggestNumber(arr);
    }  
  }       
}