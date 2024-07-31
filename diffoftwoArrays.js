function arrayDifference(arr1, arr2) {
    let difference1 = arr1.filter(item => !arr2.includes(item));
    let difference2 = arr2.filter(item => !arr1.includes(item));
    return difference1.concat(difference2);
}
let array1 = [1, 2, 3, 4, 5];
let array2 = [4, 5, 6, 7, 8];
let result = arrayDifference(array1, array2);
console.log(result); 
