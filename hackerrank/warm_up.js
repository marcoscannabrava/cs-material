
// Sock Merchant
function sockMerchant(n, ar) {
  const pairs = new Map();

  ar.forEach(el => {
      if (!pairs.has(el)) {
          pairs.set(el, 1);
      } else {
          let num = pairs.get(el) + 1;
          pairs.set(el, num);
      }
  });

  var result = 0;

  pairs.forEach((value, key, map) => {
      result += Math.floor(value / 2)
  });

  return result
}


// Counting Valleys
function countingValleys(n, s) {
  var underSeaLevel = false;
  var altitude = 0;
  var valleys = 0;
  const arr = s.split('')

  arr.forEach((step, index) => {
      step === 'U' ? altitude += 1 : altitude -= 1;
      altitude < 0 ? underSeaLevel = true : underSeaLevel = false;
      console.log(`
      index: ${index}
      step: ${step}
      prev: ${arr[index - 1]}
      under: ${underSeaLevel}
      altitude: ${altitude}
      valleys: ${valleys}
      `);
      if (underSeaLevel && arr[index - 1] === "D" && altitude === -1) valleys += 1;
  });

  return valleys;
}

console.log(countingValleys(1, "UDDDUDUU"));