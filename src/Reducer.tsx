function addNumbers(numbers) {
  let total = 0;

  for (let i = 0; i < numbers.length; i++) {
    total += numbers[i];
  }
  return total;
}

const numArr = [10, 20, 30];

const example = numArr.reduce(
  (currentValue, newValue) => currentValue + newValue,
  0
);
console.log(example);
