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


// console.log(maxChar("abbcdeeeefgh"))


const processQueries = function(queries, m) { // [3,1,2,1], 5
  let P = [...Array(m + 1).keys()];
  P.splice(0,1);
  const results = [];
  queries.forEach((q) => {
    let i = P.findIndex(el => el === q)
    results.push(i); // i = 2
    P = P.splice(i, 1).concat(P);
  });
  return results;
};


// console.log(processQueries([3,1,2,1], 5))

var entityParser = function(text) {
  const chars = {
      "&quot;": '"',
      "&apos;": "'",
      "&amp;": "&",
      "&gt;": ">",
      "&lt;": "<",
      "&frasl;": "/"
  }
  let result = text;
  Object.keys(chars).forEach((key) => {
      result = result.split(key).join(chars[key]);
      console.log(result)
  })
  return result;
};

// console.log(entityParser("x &gt; y &amp;&amp; x &lt; y is always false"))

// 8. Array Chunking
// Given an array and a size, split the array items into a list of arrays of the given size.

const chunks = (array, size) => {
  const result = [];
  let chunk = []
  let chunkSize = 0
  for(let i of array) {
    console.log(`
      i: ${i}
      chunk: ${chunk}
      result: ${result}
      `)
    chunk.push(i)
    chunkSize++;
    if(chunkSize === size || i === array[array.length - 1]) {
      result.push(chunk)
      chunk = [];
    }
  }
  return result;
}

// console.log(chunks([1, 2, 3, 4], 2));
// console.log(chunks([1, 2, 3, 4], 3));


// 12. Caesar Cipher
// Given a phrase, substitute each character by shifting it up or down
// the alphabet by a given integer. If necessary, the shifting should
// wrap around back to the beginning or end of the alphabet.

const caesarCipher = (string, number) => {
	const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
	const input = string.toLowerCase();
	let output = "";

	for (let i = 0; i < input.length; i++) {
		const letter = input[i];

		if (alphabet.indexOf(letter) === -1) {
			output += letter;
			continue;
		}

		let index = alphabet.indexOf(letter) + number % 26;
		if (index > 25) index -= 26;
		if (index < 0) index += 26;

		output +=
			string[i] === string[i].toUpperCase()
				? alphabet[index].toUpperCase()
				: alphabet[index];
	}

	return output;
};

function _caesarCipher(str, n) {
	let result = Array(str.length);
	for (let i = 0; i < str.length; i++) {
		let code = str.charCodeAt(i);
		let lower = "a".charCodeAt(0);
		if (code >= lower && code < lower + 26)
			code = (code - lower + n) % 26 + lower;
		let upper = "A".charCodeAt(0);
		if (code >= upper && code < upper + 26)
			code = (code - upper + n) % 26 + upper;
		result[i] = String.fromCharCode(code);
	}
	return result.join("");
}

// caesarCipher("I love JavaScript!", 100);
// "E hkra FwrwOynelp!";
// caesarCipher("I love JavaScript!", -100);
// "M pszi NezeWgvmtx!";

console.log(caesarCipher("I love JavaScript!", 100));
console.log(caesarCipher("I love JavaScript!", -100));