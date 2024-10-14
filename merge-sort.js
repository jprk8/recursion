// Merge Sort
// Sort the left half
// Sort the right half
// Merge the sorted halves

function mergeSort(arr, sorted = []) {
  if (arr.length > 1) {
    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);
    // sort the halves
    const sortedLeft = mergeSort(left, sorted);
    const sortedRight = mergeSort(right, sorted);
    // merge the halves and store the array
    return (sorted = merge(sortedLeft, sortedRight));
  } else {
    // return the "sorted" single element array to begin merging
    return arr;
  }
}

function merge(a, b) {
  const arr = [];
  let i = 0;
  let j = 0;

  while (i < a.length && j < b.length) {
    if (a[i] < b[j]) {
      arr.push(a[i++]);
    } else {
      arr.push(b[j++]);
    }
  }

  if (i < a.length) {
    return arr.concat(a.slice(i));
  } else if (j < b.length) {
    return arr.concat(b.slice(j));
  }
}

const test1 = [3, 2, 1, 13, 8, 5, 0, 1];
const test2 = [105, 79, 100, 110];
console.log(mergeSort(test1));
console.log(mergeSort(test2));
