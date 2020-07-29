function solutionA(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  if (A.length < 2) return 0;
  
  // the shortest strategy will always be merging the smallest ones first so we sort the initial list
  let sortedA = A.sort();
  
  let totalTime = 0;
  let acc = sortedA[0];
  sortedA.forEach((num, i) => {
      if (i !== 0) {
          acc += num;
          totalTime += acc;
      }
      console.log
  });
  
  return totalTime;
}

// TESTING
let a = [100, 250, 1000];
let b = [1000, 300, 500, 300, 200, 150, 100, 100, 900];
let c = [300];

// _--------------------------------
function solutionB(S, K) {
    let letterArr = S.split('');
    
    let compressedArr = [];
    letterArr.forEach(letter => {
        if (compressedArr[compressedArr.length - 1] && compressedArr[compressedArr.length - 1][0] === letter) {
            compressedArr[compressedArr.length - 1].push(letter)
        } else {
            compressedArr.push([letter]);
        }
    });
    
    let compressed = compressedArr.map(el => `${el.length}${el[0]}`)
    console.log(compressed.join(''));
    
    return 1;
}

// TESTING
console.log(solutionB('ABBBCCDDCCC', 3));