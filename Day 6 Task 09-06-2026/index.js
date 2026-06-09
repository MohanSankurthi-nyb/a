
//function
//function is a reusable block of code that performs a specific task.Instead of writing the same code multiple times,can 
// place it inside a function and call it whenever needed

function functionName(){

}

//function declaration (function defined using function keyword) -> syntax
function functionname(){

}
functionName()

//function expression (function stored in a variable)
//3 ways -> named function
            // anonymous function
            // arrow function
// 1.named =>
 let a = function functionname(){

 }
 a()

 //2.anonymous function => no function name
 let b = function () {
     
    return
 }

//  3.arrow function
//introduced in ES-6
let c = () => {

}

//recursive function -> a function calling itself

// undefined -> variable is declared but no value is assigned
// not defined -> variable is used without being declared

// features                 var         let         const
// redeclaration           yes         no            no        ( declaring same variable repeatedly )
// reassignment            yes         yes           no        ( changing the value of an existing value )  
//must initialized         no          no            yes
 //1.var
 var name= "joe"  
 var name="sui"    //redeclaration
console.log(name)

var age=20
age=25   // reassignment
console.log(age)

function test(){
   var x=10
}
//console.log(x) -> error because of function scope

// 2.let
let city="hyd"
//let city="karimnagar"
//console.log(city) -> error bcoz redeclaration not allowed

let score=28
score=890 //reassignment
console.log(score)

{
   let x=10
}
// console.log(x)-> error bcoz of block scope

//3.const
//const pineapple (error -> must be initialized)
//console.log(pineapple)

const pi=309
//pi=234 (error -> reassignment not allowed)
console.log(pi)

{
   const ix=10
}
// console.log(ix)-> error bcoz of block scope





//js code executes in two phases
//memory creation
//code execution
console.log(p)
//let p=10 -> error cant access before initialization
var p=10
console.log(p)
// 1.function declaration -> function defined using function keyword
function hello(){
    console.log("hlo")
}hello()

// 2.function expression-> function stored in a variable
const hello1 = function(){
     console.log("hello")
}
hello1()

// 3.arrow function->
const hi = () => {
    console.log("hello")
} 
hi()

//4.function with parameters
function add(a,b){
    console.log(a+b)
}
add (10,20)

//5.function with return value
function multiply(a,b) {
 return a* b
}
console.log(multiply(5,8))

// 6.anonymous function-> function without a name
let message = function () {
    console.log("anonymous function")
}

//function without parameters
//function does not receive any values 
function hey(){
     console.log("function without parameters")
}
hey()

//function with parameters
//function receive any values(parameters) when called
function add(a,b){
    console.log(a+b)
}
add (10,20)

//recursive function
function countdown(n){
   if(n===0){
      return
   }
   console.log(n)
   countdown(n-1)
}
countdown(5)


//recursive function for Factorial
function factorial(n){
   if(n===0 || n===1){
      return 1
   }
   return n* factorial(n-1)
}
console.log(factorial(6))


//fibonacci series using recursion
function fibonacci(n){
   if(n===0){
      return 0
   }
   if(n===1){
      return 1
   }
   return fibonacci(n-1) + fibonacci(n-2)
}
let terms=10
for(let i=0;i<terms;i++){
   console.log(fibonacci(i))
}

//hoisting
// js behaviour of moving declarations to the top of their scope before code execution
// we can sometimes use variables or functions before they appear in the code

console.log(ab)
var ab=10 // undefined

//console.log(bc)
let bc=20 // reference error

//console.log(cd)
const cd=30 // reference error

//function hoisting
//function declaration
hii()
function hii(){
   console.log("hi")
}

//function expression
// sayHi()
// var sayHi = function(){
//  console.log("hello") -> ERROR bcoz sayHi is not a function
// }

//arrow function
// hey()
// let hey=()=>{
//    console.log("hey")
// } -> error








