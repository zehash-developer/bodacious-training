let myArray = [1 , -12, 16, 34, [ 21, -2, 41, [65, -100, 223, 11]], 17, 89, 53]
let myArrayText = myArray.toString();
let myArrayNumber = myArrayText.split(',').map(Number);
let minimum = Math.min(...myArrayNumber);
console.log(minimum);