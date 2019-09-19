// Function Description
// Complete the function birthdayCakeCandles in the editor below.It must return an integer representing the number of candles she can blow out.
// birthdayCakeCandles has the following parameter(s):
// ar: an array of integers representing candle heights

// Input Format
// The first line contains a single integer, , denoting the number of candles on the cake.
// The second line contains  space - separated integers, where each integer  describes the height of candle.

function birthdayCakeCandles(ar) {
  let max = Math.max(...ar);
  let result = ar.filter(count => count === max);
  return result.length;
}
