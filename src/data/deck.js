export function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
    // Generate random number
    var j = Math.floor(Math.random() * (i + 1));

    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }

  return array;
}

// https://medium.com/javascript-in-plain-english/algorithms-101-rotate-array-in-javascript-three-solutions-260fbc923b64
export function rotateArray(array, k) {
  if (array.length > k) {
    array.unshift(...array.splice(-k));
  } else {
    let i = 0;
    while (i < k) {
      array.unshift(array.splice(-1));
      i++;
    }
  }
  return array;
}
