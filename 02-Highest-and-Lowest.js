// In this little assignment you are given a string of space separated numbers,
//  and have to return the highest and lowest number.

// steps
// 1-remove space from string
// 2-convert string into arr
// 3-loop in arr

function highAndLow(numbers) {
  // let arrnum = numbers.split(" ");
  // let high = parseInt(arrnum[0]);
  // let low = parseInt(arrnum[0]);
  // for (let i = 0; i < arrnum.length; i++) {
  //   let current = parseInt(arrnum[i]);
  //   if (current > high) {
  //     high = current;
  //   }
  //   if (current < low) {
  //     low = current;
  //   }
  // }
  // return `${high} ${low}`;

  //Soluation 2
  let arrnum = numbers.split(" ");
  let high = Math.max(...arrnum);
  let low = Math.min(...arrnum);
  return `${high} ${low}`;
}

console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"));
