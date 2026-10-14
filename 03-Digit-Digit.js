// Welcome. In this kata,
//  you are asked to square every digit of a number and concatenate them.

// For example, if we run 9119 through the function, 811181 will come out,
//  because 92 is 81 and 12 is 1. (81-1-1-81)

// Example #2: An input of 765 will/should
// return 493625 because 72 is 49, 62 is 36, and 52 is 25. (49-36-25)

// Note: The function accepts a non-negative integer and returns an integer.

// Happy Coding!

// steps:
//1-convert num to string    ==> <toString()>
//1-convert string to arr    ==><split("")> or <Arrary.form(str)>
//3-loop in arr              ==><map(()=>)>
//4-power of each num in arr
//5-convert arr to str       ==><join("")>
//6-convert str to number    ==><Number(str)> or <parseInt(str)>

function squareDigits(num) {
  let converts = num
    .toString()
    .split("")
    .map((e) => e * e)
    .join("");
  return Number(converts);
}
console.log(squareDigits(3212));
