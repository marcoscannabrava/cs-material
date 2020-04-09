// String Reversal
// describe("String Reversal", () => {
//   it("Should reverse string", () => {
//     assert.equal(reverse("Hello World!"), "!dlroW olleH");
//   });
// });

const reverseString = (string) => {
  let newStr = ""
  for (let i = string.length - 1; i >= 0; i--) {
    newStr += string[i];
  }
  return newStr;
}

// console.log(reverseString("Hello"));


// Fizz Buzz
// Given a number as an input, print out every integer from 1 to that number. 
// However, when the integer is divisible by 2, print out “Fizz”; 
// when it’s divisible by 3, print out “Buzz”; 
// when it’s divisible by both 2 and 3, print out “Fizz Buzz”.

const fizzBuzz = (num) => {
  for (let i = 1; i <= num; i++) {
    if (i % 2 === 0 && i % 3 === 0) {
      console.log("FizzBuzz");
    } else if (i % 2 === 0) {
      console.log("Fizz");
    } else if (i % 3 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}

// fizzBuzz(15);

// Max Character
// Given a string of characters, return the character that appears the most often.

const maxChar = (string) => {
  const hash = {};
  string.split('').forEach((char) => {
    hash.hasOwnProperty(char) ? (hash[char]++) : (hash[char] = 0);
  });
  let max = 0;
  Object.values(hash).forEach((val) => {
    if (val > max) max = val; 
  })
  return Object.keys(hash).find(key => hash[key] === max)
}


console.log(maxChar("abbcdeeeefgh"))