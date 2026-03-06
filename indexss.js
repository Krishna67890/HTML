let a = -12
let b = -3

let rem = a%b

console.log(rem)

let c = 12
if (true) {
    let  b  = 3

}
console.log(b)
console.log(c)

let f = 10

for (let i = 1; i <=1; i++) {
    f = 20
    console.log("inner",f)
}

console.log("out",f)


let v = 10

for (let i = 1; i <=-1; i++) {
    console.log("inside before change",v)
    let v = 100
    console.log("inside after value is modified",v)
}

console.log("outside after change",v)

console.log(g)

let g = 10 // g is not defined

if(true){
    let a = 20
    
    var j = 200
}

console.log(j) // 200


function hello(){
    let a = 100 //its respects block scope
    var b = 100 // its respects function scope
    c = 300
}

hello()

console.log(c) // 300
//The temporal dead zone (TDZ) is a period of time in JavaScript
//when a variable is inaccessible until it's initialized with a value.



const arr  = [100,200,300]

arr[0] = 500

console.log(arr) // [500, 200, 300]

arr = [500, 200, 300]

console.log(arr) // TypeError: Assignment to constant variable.

const arr1 = [100,200,300]

arr1.push(400)
arr1.length = 400

console.log(arr1) // [100, 200, 300, 400]

function hello(a){
    console.log(a)
}

hello(100) // 100
hello(200) // 200
hello(33.3)//33.3
hello("hello") // hello
hello(true) // true
hello(null) // null


function greet(a){
    console.log("Hello", a)
}

//arrow functions

const greet1 = (a) => {
    console.log("Hello", a)
}

greet("world") // Hello world
greet1("world") // Hello world

const add = (a, b) => a + b

console.log(add(1, 2)) // 3

const multiply = (a, b) => {
    if(b === 0) return 0
    return a * b
}

console.log(multiply(10, 0)) // 0

const divide = (a, b) => {
    if(b === 0) throw new Error("Cannot divide by zero")
    return a / b
}

console.log(divide(10, 2)) // 5

console.log(divide(10, 0)) // Error: Cannot divide by zero

const helloWorld = () => console.log("Hello World")

helloWorld() // Hello World

const square = (a) => a * a

console.log(square(5)) // 25

const cube = (a) => a * a * a

console.log(cube(5)) // 125

const sum = (...args) => args.reduce((acc, curr) => acc + curr, 0)

console.log(sum(1, 2, 3, 4, 5)) // 15

const multiplyAll = (...args) => args.reduce((acc, curr) => acc * curr, 1)

console.log(multiplyAll(1, 2, 3, 4, 5)) // 120

const isEven = (num) => num % 2 === 0

console.log(isEven(10)) // true

console.log(isEven(11)) // false

const isPrime = (num) => {
    if(num <= 1) return false
    for(let i = 2; i <= Math.sqrt(num); i++){
        if(num % i === 0) return false
    }
    return true
}

console.log(isPrime(10)) // false

console.log(isPrime(11)) // true

const sumOfSquares = (arr) => arr.reduce((acc, curr) => acc + curr * curr, 0)

console.log(sumOfSquares([1, 2, 3, 4, 5])) // 55

const max = (arr) => Math.max(...arr)

console.log(max([1, 2, 3, 4, 5])) // 5

const min = (arr) => Math.min(...arr)

console.log(min([1, 2, 3, 4, 5])) // 1

const average = (arr) => sum(arr) / arr.length

console.log(average([1, 2, 3, 4, 5])) // 3

const reverse = (arr) => [...arr].reverse()

console.log(reverse([1, 2, 3, 4, 5])) // [5, 4, 3, 2, 1]

const shuffle = (arr) => {

    for(let i = arr.length - 1; i > 0; i--){
        let j = Math.floor(Math.random() * (i + 1))
        let temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
    }
    return arr
}

console.log(shuffle([1, 2, 3, 4, 5])) // [4, 1, 5, 2, 3]

const findMax = (arr) => {
    let max = arr[0]
    for(let i = 1; i < arr.length; i++){
        if(arr[i] > max){
            max = arr[i]
        }
    }
    return max
}

console.log(findMax([1, 2, 3, 4, 5])) // 5

const findMin = (arr) => {
    let min = arr[0]
    for(let i = 1; i < arr.length; i++){
        if(arr[i] < min){
            min = arr[i]
        }
    }
    return min
}

console.log(findMin([1, 2, 3, 4, 5])) // 1

const findAverage = (arr) => {

    let sum = 0
    for(let i = 0; i < arr.length; i++){
        sum += arr[i]
    }
    return sum / arr.length
}

console.log(findAverage([1, 2, 3, 4, 5])) // 3

const findReverse = (arr) => {
    let reversed = []
    for(let i = arr.length - 1; i >= 0; i--){
        reversed.push(arr[i])
    }
    return reversed
}

console.log(findReverse([1, 2, 3, 4, 5])) // [5, 4, 3, 2, 1]

const findShuffle = (arr) => {
    let shuffled = [...arr]
    for(let i = shuffled.length - 1; i > 0; i--){
        let j = Math.floor(Math.random() * (i + 1))
        let temp = shuffled[i]
        shuffled[i] = shuffled[j]
        shuffled[j] = temp
    }
    return shuffled
}

console.log(findShuffle([1, 2, 3, 4, 5])) // [4, 1, 5, 2, 3]



let greet  = ()=> {
    console.log("Hello World")
}

greet() // Hello World  


