// Return the number (count) of vowels in the given string.
// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

// Steps:
// 1-convert to lowerCase use <toLowerCase>
// 2-convert string to arr use <Arrary.from()> or <split("")>
// 3-stor vewels words ["a", "e", "i", "o", "u"]
// 2-loop in arr words
// 3-check if the letter is vowel or not
// 3-return num

function getCount(str) {
  // let strLower = str.toLowerCase();
  // let words = Array.from(strLower); // ["p","e","a","r"," ","t","r","e","e"]
  // let vowels = ["a", "e", "i", "o", "u"];
  // let count = 0;
  // for (let i = 0; i < words.length; i++) {
  //   if (vowels.includes(words[i])) {
  //     count++;
  //   }
  // }
  // return count;
  const regex = /[aeiou]/gi;
  return (str.match(regex) || []).length;
}

console.log(getCount("pear tree"));
