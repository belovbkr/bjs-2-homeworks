function getArrayParams(...arr) {
  // let min = arr[0];
  // let max = arr[0];
  // let sum = 0;

  // for (let i = 0; i < arr.length; i++) {
  //   if (arr[i] < min) {
  //     min = arr[i];
  //   } else if (arr[i] > max) {
  //     max = arr[i];
  //   }
  //   sum = sum + arr[i];
  // }

  let min = Math.min.apply(null, arr);
  let max = Math.max.apply(null, arr);

  // let sum = arr.reduce((acc, item) => acc + item, 0);
  // let avg = Number((sum / arr.length).toFixed(2));

  let avg = Number(arr.reduce((acc, item, index, array) => {
      acc += item;
      if (index === array.length - 1) {
        return acc / array.length;
      }
      return acc;
    }, 0).toFixed(2));

  return { min: min, max: max, avg: avg };
}

console.log(getArrayParams(5));


function summElementsWorker(...arr) {
  let sum = arr.reduce((acc, item) => acc + item, 0);
  return sum;
}

function differenceMaxMinWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }
  let differenceMaxMin = Math.max.apply(null, arr) - Math.min.apply(null, arr);
  return differenceMaxMin;
}

function differenceEvenOddWorker(...arr) {
  // let sumOfEven = arr.reduce((acc, item, index, array) => {
  //   if (array[index] % 2 === 0) {
  //     return acc += item;
  //   }
  //   return acc;
  // }, 0);

  // let sumOfOdd = arr.reduce((acc, item, index, array) => {
  //   if (array[index] % 2 !== 0) {
  //     return acc += item;
  //   }
  //   return acc;
  // }, 0);

  let sumOfEven = 0;
  let sumOfOdd = 0;

  for (i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumOfEven += arr[i];
    } else {
      sumOfOdd += arr[i];
    }
  }

  // if (sumOfEven > sumOfOdd) {
  //   return sumOfEven - sumOfOdd;
  // } else {
  //   return sumOfOdd - sumOfEven;
  // }

  return sumOfEven - sumOfOdd;
}

console.log(differenceEvenOddWorker(1,2,3,4,5,6,7,8));

function averageEvenElementsWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }
  // let averageOfEven = arr.reduce((acc, item, index, array) => {
  //   if (array[index] % 2 === 0) {
  //     acc += item;
  //   }
  //   if (index === array.length - 1) {
  //     return acc / array.length;
  //   }
  //   return acc;
  // }, 0);

  let sumOfEven = 0;
  let countEven = 0;

  for (i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumOfEven += arr[i];
      countEven += 1;
    } 
  }

  return sumOfEven / countEven;
}

console.log(averageEvenElementsWorker());

function makeWork (arrOfArr, func) {
  let arrOfMake = [];
  for (let i = 0; i < arrOfArr.length; i++) {
    arrOfMake.push(func(...arrOfArr[i]));
  }
  // console.log(arrOfMake);
  return Math.max.apply(null, arrOfMake);
}

console.log(makeWork([[1,2,3,4,5,6],[6,7,8,9,4],[1,2,3,4,5,6,7,8,9],[7,6,3,8,2,9,1]], summElementsWorker));
