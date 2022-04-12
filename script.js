
function getIndices(x, y) {
  for (let i=0; i < x.length; i++) {
    if (x[i] >= y) {
      return;
    }

    for (let j=0; j < x.length; j++) {
      if (j === i) {
        continue;
      }

      if (x[i] + x[j] === y) {
        return [i, j]
      }
    }
  }
  
  return [-1, -1]
}

console.log(getIndices([1,9,4,5,3,0], 10))
console.log(getIndices([2,5,9,6,1,53,45], 47))
console.log(getIndices([4,9,3,5,0,14,10], 100))
console.log(getIndices([4,9,3,10,0,14,10], 20))