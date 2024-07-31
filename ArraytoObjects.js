function arrayToObject(arr) {
    const obj = {};
    arr.forEach(([key, value]) => {
        obj[key] = value;
    });
    return obj;
}
const array = [['name', 'John'], ['age', 30], ['city', 'New York']];
const obj = arrayToObject(array);
console.log(obj); 