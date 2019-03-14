const countList = (arr) => {
  if (arr.length === 0) {
    return 0;
  } else {
    arr.shift();
    return 1 + countList(arr)
  }
}