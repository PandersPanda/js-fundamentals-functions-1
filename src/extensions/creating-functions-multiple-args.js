// 1. define a function that takes two numbers: lower and upper.
// The function should return an array containing all the numbers between
// lower and upper, including lower and upper.
//
// Example Input and Output:
// Input        | Output
// 1, 3         | [1,2,3]
// 10, 13       | [10, 11, 12, 13]
// -1, 1        | [-1, 0, 1]
//
// TODO: write code below
function numbersBetween(a, b) {
  const numsArr = []
  for (let i = a; i <= b; i++) {
    numsArr.push(i)
  }
  return numsArr
}

// 2. define a function that takes two arguments: a string and a number.
// The function should return the same string but in upper case with exclamation
// marks appended to the end. The number of exclamation marks should be
// determined by the number argument.
//
// Example Input and Output:
// Input        | Output
// disaster, 5  | DISASTER!!!!!
// error, 10    | ERROR!!!!!!!!!!
//
// TODO: write code below
function exclamateTimes(word, exclamations) {
  return word.toUpperCase() + '!'.repeat(exclamations)
}

// 3. define a function that takes two arguments: a string and a number.
// The function should return the new time in 24hr time after adding the additional time in minutes.
//
// Example Input and Output:
// Input        | Output
// '7:50', 4    | '7:54'
// '7:50', 72   | '9:02'
// '11:50', 20  | '12:10'
// '12:50', 120 | '14:50'
// '23:50', 30  | '00:20'
// TODO: write code below
function addTime(time, minutes) {
  const timeMinutes = Number(time.split(':')[1])
  let timeHours = Number(time.split(':')[0])

  let totalMinutes = timeMinutes + minutes
  while (totalMinutes > 60) {
    totalMinutes = totalMinutes - 60
    timeHours++
    if (timeHours > 23) {
      timeHours = 0
    }
  }
  let timeHoursString = timeHours.toString()
  if (timeHours === 0) {
    timeHoursString = '00'
  }
  let totalMinutesString = totalMinutes.toString()
  if (totalMinutesString.length === 1) {
    totalMinutesString = '0' + totalMinutesString
  }
  return timeHoursString + ':' + totalMinutesString
}

// TODO: change the exported value to be the name of the function you defined
module.exports = {
  a: numbersBetween, // 1. change undefined to be the name of the function defined to create the range of numbers (the first todo)
  b: exclamateTimes, // 2. change undefined to be the name of the function defined to return the string with exclamations (the second todo)
  c: addTime // etc
}
