// 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
// What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
var com = require("./common");

function arrayUpTo(n) {
  arr = [];
  for(i=0;i<n;i+=1) {
    arr.push(n-i);
  }
  return arr;
}

function maxGroups(listOfGroups) {
  maxGroups = {};
  for(i=0;i<listOfGroups.length;i+=1){
    for(var j in listOfGroups[i]) {
      if(maxGroups[j]) {
        maxGroups[j] = Math.max(listOfGroups[i][j],maxGroups[j]);
      }
      else {
        maxGroups[j] = listOfGroups[i][j];
      }
    }
  }
  return maxGroups;
}

numberList = arrayUpTo(20)
factorsList = []
for(index=0;index<numberList.length;index+=1) {
  // console.log(20-i)
  factors = com.primeFactors(numberList[index])
  hash    = com.groupList(factors)
  factorsList.push(hash)
}
mg = maxGroups(factorsList)
console.log(mg)

product = 1
for(var i in mg) {
  product *= Math.pow(i, mg[i]); 
}
console.log(product)
