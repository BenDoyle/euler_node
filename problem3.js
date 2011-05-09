// The prime factors of 13195 are 5, 7, 13 and 29.
// What is the largest prime factor of the number 600851475143 ?

num = 600851475143;

function factor(number, factorAttempt, factors) {
  stopAt         = Math.sqrt(number);
  currentNumber  = number;
  currentFactors = factors;
  while( factorAttempt <= stopAt ) {
    if( currentNumber / factorAttempt == Math.floor(currentNumber / factorAttempt) ) {
      currentNumber  = currentNumber / factorAttempt
      currentFactors.push(factorAttempt);
      currentFactors = factor( currentNumber, factorAttempt, currentFactors);
    }
    else {
      if( factorAttempt == 2 ){
        factorAttempt += 1
      }
      else {
        factorAttempt += 2
      }
    }
  }
  if( currentNumber == number ) {
    currentFactors.push(currentNumber)
  }
  return currentFactors;
}

console.log(factor(num,2,[]))