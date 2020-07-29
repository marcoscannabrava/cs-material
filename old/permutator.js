
// NOT FUNCTIONING
permutator = (array) => {
  const result = [];

  array.forEach((num, i) => {
    array.forEach((num2, j) => {
      if (i !== j) {
        // console.log(array);
        let temp = array.slice();
        debugger;
        // console.log(`temp: ${temp}`);
        temp[i] = temp[j];
        temp[j] = num;
        // console.log(`temp: ${temp}`);
        // console.log(`result: ${result}`);
        if (!result.includes(temp)) result.push(temp);
        // console.log(`result: ${result}`);
      }
    });
  });

  return result;
}

// find all permutations
a = [1, 1, 2]
b = [
  [1,1,2],
  [1,2,1],
  [2,1,1]
]

c = [2, 3, 4]
d = [
  [2,3,4],
  [2,4,3],
  [3,2,4],
  [3,4,2],
  [4,2,3],
  [4,3,2]
]

e = [1, 2, 3, 4, 5, 6]

console.log(permutator(a));
console.log(permutator(c));
console.log(permutator(e));