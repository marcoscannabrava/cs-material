// 2D Array - DS
function hourglassSum(arr) {
  let result = Number.NEGATIVE_INFINITY;
  for(let i = 0; i < 4; i++) {
    for(let j = 0; j < 4; j++) {
      let sum = arr[i][j] + arr[i][j+1] + arr[i][j+2] + arr[i+1][j+1] + arr[i+2][j] + arr[i+2][j+1] + arr[i+2][j+2];
      if(sum > result) result = sum;
    }
  }
  return result;
}

// --------------- TESTING ---------------
const matrix = 
`1 1 1 0 0 0
0 1 0 0 0 0
1 1 1 0 0 0
0 0 2 4 4 0
0 0 0 2 0 0
0 0 1 2 4 0`

let arr = [];
let i = 0;
matrix.split("\n").forEach(line => {
  arr[i] = line.split(' ').map(arrTemp => parseInt(arrTemp, 10));
  i++;
});

console.log(arr);
console.log(hourglassSum(arr));
