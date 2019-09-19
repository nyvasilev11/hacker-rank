// Function Description
// Complete the plusMinus function in the editor below.It should print out the ratio of positive, negative and zero items in the array, each on a separate line rounded to six decimals.
// plusMinus has the following parameter(s):
// arr: an array of integers

// Input Format
// The first line contains an integer, , denoting the size of the array.
// The second line contains  space - separated integers describing an array of numbers.

function plusMinus(arr) {
  let positive = 0,
    negative = 0,
    length = arr.length,
    zero = 0,
    positiveResult,
    negativeResult,
    zeroResult;

  for (let i = 0; i <= length; i++) {
    if (arr[i] > 0) positive++;
    else if (arr[i] < 0) negative++;
    else if (arr[i] === 0) zero++;
  }

  positiveResult = (positive / length).toFixed(6);
  negativeResult = (negative / length).toFixed(6);
  zeroResult = (zero / length).toFixed(6);

  console.log(Number(positiveResult));
  console.log(Number(negativeResult));
  console.log(Number(zeroResult));
}
