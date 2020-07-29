
// ---------------------- FACTORIAL ----------------------
function factorial (n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}

// ---------------------- BUBBLE SORT ----------------------
function bubbleSort (nums) {
  nums.forEach((n, i) => {
    if (nums[i + 1] < n) return [nums[i], nums[i + 1]] = [nums[i + 1], n];
  });
  nums.forEach((n, i) => {
    if (n < nums[i - 1]) bubbleSort(nums);
  })
}

// ---------------------- INSERTION SORT ----------------------
function insertionSort (nums) {
  nums.forEach((n, i) => {
    for (let j = i; j >= 0; j--) {
      if (nums[j + 1] < nums[j]) {
        [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]];
      }
    }
  });
}

// ---------------------- MERGE SORT ----------------------
const merge = (left, right) => {
  const result = [];
  
  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }
  console.log(`
  --- merge ---
  left: ${left}
  right: ${right}
  result: ${result}
  `);

  return result.concat(left, right);
}

function mergeSort(nums) {
  if(nums.length < 2) {
    return nums
  }

  const middle = Math.floor(nums.length / 2);
  const left = nums.slice(0, middle);
  const right = nums.slice(middle);

  console.log(`
  --- mergeSort ---
  left: ${left}
  right: ${right}
  `);

  return merge(mergeSort(left), mergeSort(right));
}

// ---------------------- QUICKSORT ----------------------
function quickSort(nums) {

  if ([0, 1].includes(nums.length)) return nums;

  const pivot = nums.pop() || [];
  const lesser = [];
  const greater = [];
  
  nums.forEach((n) => {
    if (n < pivot) {
      lesser.push(n);
    } else {
      greater.push(n);
    }
  });
  
  console.log(`
  --- quickSort ---
  lesser: ${lesser}
  pivot: ${pivot}
  greater: ${greater}
  `);

  return quickSort(lesser).concat(pivot).concat(quickSort(greater))

}


// ----------- TESTING -------------
const nums = [10,5,3,8,2,6,4,7,9,1];
const numsB = [ 4, 3, 6, 8, 1 ]

// bubbleSort(nums);
// insertionSort(nums);
// mergeSort(nums)
// quickSort(nums)

console.log(nums);
console.log(quickSort(nums));