
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
  var prev_altitude = 0;
  var valleys = 0;
  const arr = s.split('')

  arr.forEach((step, index) => {
      prev_altitude = altitude;
      step === 'U' ? altitude += 1 : altitude -= 1;
      altitude < 0 ? underSeaLevel = true : underSeaLevel = false;
      if (underSeaLevel && prev_altitude === 0) valleys += 1;
    });
    
    return valleys;
}

// Jumping On The Clouds
function jumpingOnClouds(c) {
    let step = 0;
    let jumps = 0;

    do {
        if (c[step + 2] === 0) {
            step++
        }
        step++
        jumps++
    } while (step < c.length - 1)

    return jumps;
}

// Repeated String
function repeatedString(s, n) {
    let as = 0;

    try {
        as = Math.floor(n / s.length) * s.match(/a/g).length;
    } catch(e) {
        as = 0;
    }
    for (let i = 0; i < (n % s.length); i++) {
        if (s[i] === "a") as++;
    }

    return as;
}

// TESTING
// console.log(`
// index: ${index}
// step: ${step}
// prev: ${arr[index - 1]}
// under: ${underSeaLevel}
// altitude: ${altitude}
// valleys: ${valleys}`);

console.log(countingValleys(1, "UDDDUDUU"));