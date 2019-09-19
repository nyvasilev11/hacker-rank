// Function Description
// Complete the timeConversion function in the editor below.It should return a new string representing the input time in 24 hour format.
// timeConversion has the following parameter(s):
// s: a string representing time in hour format

// Input Format
// A single string  containing a time in -hour clock format(i.e.: or), where  and.

function timeConversion(s) {
  let AMPM = s.slice(-2);
  let timeArr = s.slice(0, -2).split(":");

  if (AMPM === "AM" && timeArr[0] === "12") {
    timeArr[0] = "00";
  } else if (AMPM === "PM") {
    timeArr[0] = (timeArr[0] % 12) + 12;
  }

  return timeArr.join(":");
}
