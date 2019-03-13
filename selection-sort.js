//For Numbers
let testingList = [15, 5, 12, 9, 13, 1, 14, 2, 11, 6, 4, 3, 8, 10, 7]

//Function to find the smallest number
const findSmallest = (arr) => {
  let smallest = arr[0];
  let smallestIndex = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < smallest) {
      smallest = arr[i];
      smallestIndex = i;
    }
  }
  console.log(smallestIndex);
  return smallestIndex;

}


const selectionSort = (arr) => {
  newArr = [];
  for (let i = 0; i < arr.length; i++) {
    let smallest = findSmallest(arr);
    newArr.push(arr[smallest]);
    arr.splice(smallest, 1);
  }
  return newArr;
}