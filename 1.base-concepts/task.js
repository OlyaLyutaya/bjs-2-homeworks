"use strict";

function solveEquation(a, b ,c) {
  let arr = [];
  let d = b ** 2 - 4 * a * c;

  if (d > 0) {
    let x1 = (-b + Math.sqrt(d)) / (2 * a);
    let x2 = (-b - Math.sqrt(d)) / (2 * a);
    arr.push(x1, x2);
  }
  else if (d === 0) {
    let x3 = d - b/(2*a);
    arr.push(x3);
}
  return arr;
}
console.log(solveEquation(1, 12, 36));

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let test;
  let price;
  let body;
  let totalCost;
  

  if (isFinite(percent)){
    if (isFinite(contribution)){
      if (isFinite(amount)){
        if (isFinite(countMonths)){
          percent = percent/100/12;
            
          body = amount - contribution;
          test =  (percent + (percent / (((1 + percent)**countMonths) - 1)));
          price =  body * test;
            
          totalCost =  price * countMonths;

          totalCost = parseFloat(totalCost.toFixed(2));
          return totalCost;

        } else return false;//"countMonths - не число";
      } else return false;//"amount - не число";
    } else return false;//"contribution - не число";
  } else return false;//"percent - не число";

}

console.log("Ответ - " + calculateTotalMortgage(10, 0, 50000, 12));





































