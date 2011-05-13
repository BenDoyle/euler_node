// The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.
// Find the sum of all the primes below two million.



function addPrime(primes){
  highest = primes[primes.length-1];
  candidate = highest + 1 + highest%2
  condition = true
  while(condition){
    isPrime = true;
    for(i=0;i<primes.length;i++){
      if(candidate%primes[i] == 0){
        candidate += 1 + highest%2
        isPrime = false;
        break;
      }
    }
    if(isPrime) {
      primes.push(candidate);
      condition = false;
    }
  }
  return primes;
}
function sortNumber(a,b)
{
  return b - a;
}


primes = [2]
console.log(primes[primes.length-1])

while(primes[primes.length-1] < 10){ 
  primes = addPrime(primes);
  console.log(primes[primes.length-1])
}
console.log(primes)

sum = 0
for(i=0;i<primes.length-1;i++){
  sum += primes[i];
}
console.log(sum);