// Your task is to make a function that can take any
// non-negative integer as an argument and return it with its digits in descending order.
//  Essentially, rearrange the digits to create the highest possible number.

// Examples:
// Input: 42145 Output: 54421

// Input: 145263 Output: 654321

// Input: 123456789 Output: 987654321

// steps:
//1-convert num to str   <toString()>
//2-convert str to arr   <split("")>
//3-loop in arr and order from haigh to low  <sort((a, b) => b - a)> or <sort().reverse()>
//4-convert arr to str <join("")>
//5-convert str to num <Number()>

function descendingOrder(n) {
  // let str = n.toString();
  // let arr = str.split("");
  // for (let i = 0; i < arr.length; i++) {
  //   for (let j = i + 1; j < arr.length; j++) {
  //     if (arr[i] < arr[j]) {
  //       let temp = arr[i];
  //       arr[i] = arr[j];
  //       arr[j] = temp;
  //     }
  //   }
  // }

  return Number(
    n
      .toString()
      .split("")
      .sort((a, b) => b - a)
      .join(""),
  );
}

console.log(descendingOrder(123456789));
