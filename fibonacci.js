function fibs(n) {
    const arr = [0, 1];
    for (let i = 2; i < n; i++) {
        arr.push(arr[i - 1] + arr[i - 2]);
    }

    return arr;
}

function fibsRec(n, arr = [0, 1]) {
    console.log("This was printed recursively");
    if (n === 1) {
        return 0;
    } else if (n === 2) {
        return arr;
    }

    const next = arr[arr.length - 1] + arr[arr.length - 2];
    arr.push(next);
    return fibsRec(n - 1, arr);
}

console.log(fibsRec(8));