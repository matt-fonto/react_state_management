// For loop
function addNumbers(numbers) {
  let total = 0;

  for (let i = 0; i < numbers.length; i++) {
    total += numbers[i];
  }

  return total;
}

const numArr = [10, 20, 30];

const myTotal = addNumbers(numArr);
console.log(myTotal);

// Reducer function

numArr.reduce((currentValue, numAtIndex) => currentValue + numAtIndex, 0);
