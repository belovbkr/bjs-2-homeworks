"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let discr = b**2 - 4*a*c;
  if (discr > 0){
    arr = [(-b + Math.sqrt(discr) )/(2*a), (-b - Math.sqrt(discr) )/(2*a)];
  } else if (discr === 0){
    arr = [-b/(2*a)];
  }
  return arr;
}

console.log(solveEquation(1, 2, 6));

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let payPercent = percent/100/12;
  let restOfAmount = amount - contribution;
  let payMonths = restOfAmount * (payPercent + (payPercent / (((1 + payPercent)**countMonths) - 1)));


  return Number((payMonths*countMonths).toFixed(2));
}

console.log(calculateTotalMortgage(10, 1000, 20000, 24));