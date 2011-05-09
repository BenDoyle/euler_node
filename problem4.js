// A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
// Find the largest palindrome made from the product of two 3-digit numbers.

function biggestSplit(number) {
  factorAttempt  = Math.floor(Math.sqrt(number));
  factorAttempt  += 1 + factorAttempt%2
  
  while( factorAttempt > 0 ) {
    if( number / factorAttempt == Math.floor(number / factorAttempt) ) {
      return [number / factorAttempt,factorAttempt]
    }
    else {
      factorAttempt -= 1
    }
  }
  return [number,1];
}

function isPalendrome(number) {
  str = number.toString();
  for(i=0;i<Math.ceil(str.length/2);i+=1) {
    if(str.charAt(i) != str.charAt(str.length-1-i)) {
      return false;
    }
  }
  return true;
}

function findIt(characteristic){
  largest = 1000000
  while(largest > 0) {
    if(characteristic(largest)){
      factors = biggestSplit(largest)
      if(factors[0] < 1000 && factors[1] < 1000) {
        console.log(factors);
        return largest;
      }
    } 
    largest -= 1;
  }
  return largest;
}

console.log(findIt(isPalendrome));

