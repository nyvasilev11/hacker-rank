// Function Description
// Complete the staircase function in the editor below.It should print a staircase as described above.
// staircase has the following parameter(s):
// n: an integer

// Input Format
// A single integer, , denoting the size of the staircase.

function staircase(n) {
  var empty, hashTag, level;

  for (var i = 0; i < n; i++) {
    empty = n - 1 - i;
    hashTag = i + 1;
    level = " ".repeat(empty) + "#".repeat(hashTag);
    console.log(level);
  }
}
