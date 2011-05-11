// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
// Find the sum of all the multiples of 3 or 5 below 1000.

// series of numbers divisible by 3 and less than 1000
// series of numbers divisible by 5 and less than 1000
// union of first two sets
// sum it

// OR...

// 3 * SUM(1..FLOOR(1000/3)) + 5 * SUM(1..FLOOR(1000/5)) - 15 * SUM(1..FLOOR(1000/15))

var com = require("./common");

function multipleSeries(multiplier,limit) {
  return multiplier * com.series( Math.floor( ( limit - 1 ) / multiplier ) );
}

test = multipleSeries(3,10)   + multipleSeries(5,10)   - multipleSeries(15,10);
ans  = multipleSeries(3,1000) + multipleSeries(5,1000) - multipleSeries(15,1000);

console.log(test);
console.log(ans);