// Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be:
// 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
// By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.

function fib(n) {
  phi = 0.5 * ( 1 + Math.sqrt(5) )
  return Math.round(( Math.pow(phi,n) - Math.pow(-phi,-n) ) / Math.sqrt(5))
}

total = 0
index = 3
element = 2
while( element <= 4000000 ) {
  total   += element
  index   += 3
  element =  fib(index)
}

console.log(total)
