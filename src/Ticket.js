

function generateRandomNumber(n) {
    let arr = [];
    for (let i = 0; i < n; i++) {
        arr[i] = Math.floor(Math.random() * 10)+1;
    }
    return arr;
}

export { generateRandomNumber };