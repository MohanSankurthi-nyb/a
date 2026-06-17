//scope -> accessebility and lifetime of a variable
function hi(a,b,c){ //parameters
    console.log(a,b,c) //-> OP is 9 8 undefined
}
hi(9,8) //arguments

//block
const m=12
let i = 9
{
    var k=10
    let e = 45
    const mi=12
    console.log(e)
    console.log(k)
    console.log(m)
    console.log(i)
}
// console.log(e) -> error 
// console.log(mi) -> error

//let and const are block level scope variables -> cant access outside the block

//function var  let const
//var -> can be used or accessed outside the function
//let const -> cant be accessed 

//block var let const
//var -> can be used or accessed outside the block
//let const -> cant be accessed outside the block


//var is a functional scope
//let const are block scope

//recursive function -> function calling itself
let sum = 0
let one= function rec(a){
    if(a==0){
        return 0
    }
    sum+=a
    return sum+rec(a-1)

} //sum of first 10 natural numbers
console.log(one(10))

//sum of n natural numbers using recursion
function s(n) {
    if (n === 0) {
        return 0
    }
    return n + s(n - 1) // Recursive call
}

console.log(s(5)) // Output: 15


//global scope
//variables declaredb outside any function or block can be accessed from anywhere
let comp="chatgpt"
function showCom(){
    console.log(comp)
}
showCom()
console.log(comp)

//function scope
//variables declared with var inside a function are accessed only within that function
function cal(){
    var result=1000
    console.log(result)
}
cal()

//block scope
//variables declared with let and const are accessible only inside the block {}
if(true){
    let age=34
    const city="jagtial"
    console.log(age)
    console.log(city)
}
// console.log(age) -> error
// console.log(city)-> error

// global scope => acessible everywhere
// function scope => accessible only inside the function
// block scope => accessible only inside the block


//recursive programs with comparison with iterative solutions
//1.factorial using recursive solution
function factorial(n){
    if(n===0 || n===1){
        return 1
    }
    return n* factorial(n-1)
}
console.log(factorial(10))

//1.factorial using iterative solution
function Factorial(n){
    let result=1
    for(i=1;i<=n;i++){
        result*=i
    }
    return result
}
console.log(Factorial(10))

//2.fibonacci using recursive solution
function fibonacci(n){
    if(n<=1){
        return n
    }
    return fibonacci(n-1) + fibonacci(n-2)
}
console.log(fibonacci(8))

//1.fibonacci using iterative solution
function Fibonacci(n){
    let a =0
    let b=1
    for(i=2;i<=n;i++){
        let temp=a+b
        a=b
        b=temp
    }
    return n===0 ? 0 : b
}
console.log(Fibonacci(8))

//recursive => function calling itself
//iterative => uses loop



//Scope Accessibility
//=>  determines where a variable can be accessed in a program

// 1.Global scope=> variables declared outside all functions and blocks
// Accessible throughout the program
let comp1="chatgpt"
function showCom1(){
    console.log(comp1)
}
showCom1()
console.log(comp1)

//2.Function Scope => variables declared with var inside a function are accessed only within that function
function cal1(){
    var result1=1000
    console.log(result1)
}
cal1()

//block scope
//variables declared with let and const are accessible only inside the block {}
if(true){
    let age1=34
    const city1="jagtial"
    console.log(age1)
    console.log(city1)
}
// console.log(age) -> error
// console.log(city)-> error

// Scope type         Declaration          accessible inside           accessible outside
// Global Scope       var,let,const            yes                         yes
// function scope       var                     yes                         no
// block scope         let , const             yes                         no


//recursion factorial example
function factorial1(n){
    if(n===0 || n===1){
        return 1
    }
    return n* factorial1(n-1)
}
console.log(factorial1(5))

//recursion flow
//factorial(5)
// -> 5 * factorial(4)
// -> 5 * 4 * factorial(3)
// -> 5 * 4 * 3 * factorial(2)
// -> 5 * 4 * 3 * 2 * factorial(1)
// -> 5 * 4 * 3 * 2 * 1
// ->  120
 
let numbers =5
function printnumbers(){
    for(i=1;i<=numbers;i++){
        console.log(i)
    }
}
printnumbers()
 