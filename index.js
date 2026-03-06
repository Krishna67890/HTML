const person = {
    name: "Yogesh",
    age: 23,
    currentlyStudying: 12,
    "current Salary": 1000
};

// CRUD -> Create, Read, Update, Delete

// ===== READ/get============
console.log(person.name); // Yogesh
console.log(person.currentlyStudying); // 12
console.log(person["current Salary"]); // 1000

// ------- Update/Edit -------
person.name = "Youraj";
person["current Salary"] = 90;

console.log(person); // { name: 'Youraj', age: 23, currentlyStudying: 12, "current Salary": 90 }

    //------- update/Edit -------

    let person = {};
    person.name = "Youraj";
    person["current salary"] = 90;
    
    console.log(person); // { name: 'Youraj', current salary: 90 }
    

//            Arrays               //

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(arr); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

console.log(arr.length); // 10

// Length can be set to 0 to empty the array
arr.length = 0;
console.log(arr); // []

// Add new elements and perform operations
arr.push(20); // Add element at the end
arr.unshift(5); // Add element at the beginning
console.log(arr); // [5, 20]

arr.pop(); // Removes the last element
arr.shift(); // Removes the first element
console.log(arr); // []


//----------- Edit ----------//

arr[0] = 20;
arr[3] = 30;
arr[90] = 90;

console.log(arr); // [ 0, 2, 3, 30, 5, 6, 7, 8, 9, 10, 90 ]

arr.push(30);
console.log(arr); // [ 0, 2, 3, 30, 5, 6, 7, 8, 9, 10, 90, 30 ]

arr.pop();
console.log(arr); // [ 0, 2, 3, 30, 5, 6, 7, 8, 9, 10, 90 ]

arr.shift(); // REMOVES THE VALUES  FROM THE START OF THE VALUES
console.log(arr); // [ 2, 3, 30, 5, 6, 7, 8, 9, 10, 90 ]

arr.unshift(20); // ADDS THE VALUES  TO THE START OF THE VALUES
console.log(arr); // [ 1, 2, 3, 30, 5, 6, 7, 8, 9, 10, 90 ]


// passing in js

function multiplyByTwo(arr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] *= 2;
    }
    return arr;
}

// --------- HOISTING  ------------//

console.log(X, 'X')
var x = 99;
//  Hosting VIEW  //

var x;

console.log(x, 'X') // undefined'
x = 99;
//IT SEEMS THAT VAR X IS DECLARED ON TOP

console.log(1 +2); // 3
console.log(Math.pow(2,3)); //8

//module
console.log(101 % 3); //
console.log(10 % 2) // 0
console.log(1> 2); //false
console.log(1 <=2); //True
console.log(1 == 2); // false
console.log(1 != 2); // True

// == vs === 

console.log(1 === '1'); // false
console.log(1 == '1'); // true

console.log(true && false); // false
console.log(true || false); // true

// ----------  basic programing --------------------

// 1. IF ELSE

if(money > 10000) { //
} else {
    // go with 10k phone chinese
}

// if you want to find out if a number is even or not 
let n = 101;

if (n % 2 === 0) {
if( n % 2 === 1) {
    console.log("even")
}else {
    console.log("odd")
}

if(n & 1 === 0) {
    console.log("even")
} else {
    console.log("odd")
}

// 2. Switch

switch(condition){
    case 1:
        console.log("case 1");
        break;
    case 2:
        console.log("case 2");
        break;
    default:
        console.log("default");
        break;
}

//  -------- Loops --------

let arr = [12, 17, 15, 14, 90, 13]

// 1.for loop

for(let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

// 2. while loop

let i = 0;
while(i < arr.length) {
    console.log(arr[i]);
    i++;
}

// 3. do-while loop

do {
    console.log(arr[i]);
    i++;
} while(i < arr.length)
    
// 4. forEach loop //

arr.forEach(function(value, index) {
    console.log(value, index);
});

// 5. map

let newArr = arr.map(function(value) {
    return value * 2;
});

console.log(newArr);

// 3. for - of (value)

for(let value of arr) {
    console.log(value);
}

// 4. for - in (index)

for(let index in arr) {
    console.log(arr[index]);
    console.log(index);
    console.log(typeof index);
    console.log(arr.hasOwnProperty(index));
    console.log(arr[index] === arr[parseInt(index)]);
    console.log(arr[index] === arr[+index]);
    console.log(arr[index] === arr[Number(index)]);
    console.log(arr[index] === arr[~~index]);
    console.log(arr[index] === arr[parseInt(index, 10)]);
    console.log(arr[index] === arr[parseInt(index, 16)]);
    console.log(arr[index] === arr[parseInt(index, 8)]);
    console.log(arr[index] === arr[parseInt(index, 2)]);
    console.log(arr[index] === arr[parseInt(index, 17)]);
    console.log(arr[index] === arr[parseInt(index, 18)]);
}

// Corrected array iteration
const array = [12, 17, 15, 14, 90, 13];
for (const item of arr) {
    console.log(item, "for of loop");
}

// Cannot use for..of directly on an object, use for..in or Object.keys/values/entries
const obj = {
    name: "Yogesh",
    age: 23
};

// Correct way to iterate over an object using for..in
for (const key in obj) {
    console.log(key, obj[key]);
}

// Function declaration
function greet(name) {
    console.log("Hello", name);
}
greet("Yogesh");

// Function to add two numbers
function add(a, b) {
    return a + b;
}

// Corrected function for sum
function sum(a, b) {
    let c = a + b;
    return c;
}

console.log(sum(1, 2)); // Correct usage, will return 3

// Multiply function
function multiply(a, b) {
    return a * b;
}

const money = sum(1, 2);
console.log(money, 'money'); // 3

function printName(name) {
    console.log("Hello", name);
}

printName("Krishna");

// Function expression
const sum2 = function(a, b) {
    return a + b;
};

console.log(sum2(1, 2), 'sum2'); // 3

// Function with default values
function sumWithDefault(a = 0, b = 0, c = 0) {
    return a + b + c;
}

console.log(sumWithDefault()); // 0
console.log(sumWithDefault(1)); // 1

// Correct usage of the rest operator
function admissiontoSchool(name, standard, age, ...info) {
    const student = {
        name,
        standard,
        age,
        info: info[0],
    };

    console.log(student);
    console.log('Rest of the information:', info);
}

admissiontoSchool("Arjun", 1, 5, "Delhi Pitampura", "Father: XYZ", "Mother: XYZ");

// Function for sum with proper arguments
function sum(a, b) {
    a = a + 10;
    b = b + 10;
    return a + b;
}

const result = sum(1, 2);
console.log(result, 'result'); // 23

// Define 'Science' object properly
const science = {
    marks: 88,
    grade: "B"
};

function sumMarks(subject1, subject2) {
    subject1.marks += 2;
    subject2.marks += 3;
    return subject1.marks + subject2.marks;
}

console.log(sumMarks(math, science)); // Correctly uses 'science'

// Output original marks
console.log(math.marks, 'Original math marks'); // 102 (100 + 2)
console.log(science.marks, 'Original science marks'); // 91 (88 + 3)
}