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

function primeFactors(number) {
  return factor(number,2,[]);
}

function series(limit) {
  return limit * ( limit + 1 ) / 2;
}

function groupList(list) {
  groups = {};
  for(i=0;i<list.length;i+=1) {
    if(groups[list[i]]) {
      groups[list[i]] += 1;
    }
    else {
      groups[list[i]] = 1;
    }
  }
  return groups;
}

exports.primeFactors = primeFactors;
exports.series = series;
exports.groupList = groupList;