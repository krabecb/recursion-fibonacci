//Fibonacci - 0 and 1!
// function fibonacci(nth, idx = 2, prevNum = 0, currNum = 1) {
//   // This function returns the Nth number in the fibonacci sequence.
//   // https://en.wikipedia.org/wiki/Fibonacci_number
//   // console.log(idx, nth)
//   //BASE CASE
//   if (idx === nth) { return currNum }
//   currNum = prevNum + currNum
//   prevNum = currNum - prevNum
//   return fibonacci(nth, ++idx, prevNum, currNum)
// }
// fibonacci(13) //output => 144

//Fibonacci - 1 and 1!
function fibonacci(nth, idx = 3, prevNum = 1, currNum = 1) {
    //BASE CASE
    if (idx === nth) { return currNum }
    currNum = prevNum + currNum
    prevNum = currNum - prevNum
    return fibonacci(nth, ++idx, prevNum, currNum)
  }
  fibonacci(10) //output => 34