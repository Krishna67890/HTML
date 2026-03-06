//----- SPEED OPERATOR ---------------- 
// ... -> SYNTAX

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// if you think this is a copy 

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const copyArr1 = [];

// Method 1: Using a for loop to create a copy
for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    copyArr1.push(item);
}

console.log(copyArr1); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(copyArr1 === arr, "Comparing arr with copyArr1"); // false

// Method 2: Using Spread Operator for shallow copy
const copyArr2 = [...arr];

console.log(copyArr2, 'copyArr2'); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(arr === copyArr2, "Comparing arr with copyArr2"); // false

//----- DEEP COPY VS SHALLOW COPY ----------------

const person = {
    name: 'John',
    age: 30,
    address: {
        street: '123 Main St',
        city: 'New York'
    }
}

// Shallow copy of person
const copyPerson = { ...person };

console.log(copyPerson, 'copyPerson');
console.log(copyPerson === person, 'Comparing person and copyPerson'); // false

// Modifying a property of the shallow copy
copyPerson.name = 'Jane'; // Change name in copy
console.log(copyPerson, 'copyPerson after changing name');

// Deep copy of person
const deepCopyPerson = JSON.parse(JSON.stringify(person));
deepCopyPerson.address.city = 'Los Angeles'; // Change city in deep copy
console.log(deepCopyPerson, 'deepCopyPerson after changing city');
console.log(person.address.city, 'Original person city'); // Still 'New York'

// To demonstrate the impact of shallow copy
const shallowCopy = { ...person };
shallowCopy.address.city = 'Los Angeles'; // Change city in shallow copy
console.log(shallowCopy.address.city, 'Shallow copy city'); // 'Los Angeles'
console.log(person.address.city, 'Original person city after shallow copy change'); // Now also 'Los Angeles'


var a = 12;
console.log(a)

if(true) {
    console.log(a, 'Los Angeles')
}
console.log(a)

var b =16;
console.log(b);

function abc(){
    var b = 100;
    console.log(b, 'inside the function');

    return 1;
}

//functional exicution context

var returnedValue = abc();
console.log(returnedValue);
console.log(a, 'after the function call');

var a = 100;
console.log(a);
if (true) {
var a = 100;
console.log(a, 'inside the if');
}

console.log(a, 'after if')

function user() {
var obj = {
    name: "akash"
}
obj.name = "amit";

console.log(obj);
}
console.log(user());

console.log(obj);







