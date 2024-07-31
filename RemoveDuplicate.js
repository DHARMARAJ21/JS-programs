function removeDup(arr) {
    return [...new Set(arr)];
}

const arr = [1, 2, 2, 3, 4, 4, 5, 5, 6, 6, 6];
const newarr = removeDup(arr);
console.log(newarr);