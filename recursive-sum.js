const sum = (arr) => {
  if (arr.length === 0) {
    return 0
  }
  else {
    let i = arr.shift();
    return i + sum(arr);
  }  
}