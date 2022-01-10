var min = 1;
var max = 20;
var rand = min + Math.random() * (max - min);
console.log(rand);
// ..........................

var d = Math.floor(Math.random() * 20);
console.log(d);

// ...........................

let value = Math.floor(Math.random() * 10);
console.log(value);

// ..............................

var randomNumber = Math.floor((Math.random() * 20) + 1);

// ...........................

console.log(Math.floor(Math.random() * 20));

// ...............................

var no = Math.floor(Math.random() * 20);
console.log(no);

//.....................................

function rand(min, max) { return Math.random() * (max - min) + min; }
console.log(rand(0,20));