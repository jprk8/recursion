// Merge Sort
// Sort the left half
// Sort the right half
// Merge the sorted halves

function mergeSort(arr) {
  if (arr.length > 1) {
    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);
    return merge(mergeSort(left), mergeSort(right));
  } else {
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
  } else {
    return arr.concat(b.slice(j));
  }

}

const test1 = [3, 2, 1, 13, 8, 5, 0, 1];
const test2 = [105, 79, 100, 110];
const test3 = [2, 4, 1, 3, 5];
console.log(mergeSort(test1));
console.log(mergeSort(test2));
console.log(mergeSort(test3));