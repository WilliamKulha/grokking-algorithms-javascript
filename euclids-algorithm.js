const gcd = (smallNumber, bigNumber) => {
  
  if (bigNumber % smallNumber === 0) {
    return smallNumber
  }
  else {
    return gcd((bigNumber % smallNumber), smallNumber);
  }
}