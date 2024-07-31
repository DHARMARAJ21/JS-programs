function findLongestString(arr) {
    if (arr.length === 0) return null; // Handle empty array case

    let longest = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i].length > longest.length) {
            longest = arr[i];
        }
    }
    return longest;
}
const strings = ["apple", "banana", "cherry", "blueberry", "strawberry"];
const longestString = findLongestString(strings);
console.log(longestString); 