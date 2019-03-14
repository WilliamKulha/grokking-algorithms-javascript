const gcd = (smallNumber, bigNumber) => {
  
  if (bigNumber % smallNumber === 0) {
    console.log(smallNumber);
    return smallNumber
  }
  else {
    gcd((bigNumber % smallNumber), smallNumber);
  }
}