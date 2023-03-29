function getArrayParams(...arr) {
  let min = Infinity;
  let max = -Infinity;
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
    if (arr[i] > max) {
      max = arr[i];
    }
    sum += arr[i];
  }

  avg = sum / arr.length;
  avg = parseFloat((Math.round(avg * 100) / 100).toFixed(2));

  return {
     min: min, 
     max: max, 
     avg: avg };
};

function summElementsWorker(...arr) {

	let result = arr.reduce((summ, currentValue) => summ + currentValue, 0);
	return result;
}

function differenceMaxMinWorker(...arr) {
	if (Array.isArray(arr) && arr.length) {
		let max = Math.max(...arr);
		let min = Math.min(...arr);
		a = max - min;
		return (a);
	} else {
		return 0;
	}
}



function differenceEvenOddWorker(...arr) {
	if (Array.isArray(arr) && arr.length) {
		let sumEvenElement = 0;
		let sumOddElement = 0;
		for (let i = 0; i < arr.length; i++) {
			let element = arr[i];
			if (element % 2 == 0) {
				sumEvenElement = sumEvenElement + arr[i];
			} else {
				sumOddElement = sumOddElement + arr[i];
			}
		}
		rezult = sumEvenElement - sumOddElement;
		return (result);
	} else {
		return 0;
	}
}


function averageEvenElementsWorker(...arr) {
	if (Array.isArray(arr) && arr.length) {
		let sumEvenElement = 0;
		let countEvenElement = 0;
		for (let i = 0; i < arr.length; i++) {
			if (arr[i] % 2 === 0) {
				sumEvenElement += rest[i];
				countEvenElement++;
			}
		}
		if (countEvenElement === 0) {
			return 0;
		}
	}

	return sumEvenElement / countEvenElement;
}

function makeWork(arrOfArr, func) {
	let maxWorkerResult = -Infinity;
	for (let index = 0; i < arrOfArr.length; i++) {
		let element = arrOfArr[i];
		for (let i = 0; i < element.length; i++) {
			let element2 = element[i];
		}
		maxWorkerResult1 = func(...element)
		if (maxWorkerResult < maxWorkerResult1) {
			maxWorkerResult = maxWorkerResult1;
		}
	}
	return maxWorkerResult;
  
}