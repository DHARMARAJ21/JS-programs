function rotateArray(arr, steps) {
    const len = arr.length;
    steps = steps % len;
    return arr.slice(-steps).concat(arr.slice(0, -steps));
}
const array = [1, 2, 3, 4, 5];
const rotatedArray = rotateArray(array, 2);
console.log(rotatedArray); // Output: [4, 5, 1, 2, 3]