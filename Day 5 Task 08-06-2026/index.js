

console.log('ternary operator')
//condition ? expressionifTrue : expressionifFalse
var num=10
var result= num>=0 ? "positive number" : "negative number"
console.log(result)

var num=7
var result=num % 2=== 0 ? "even " : "odd"
console.log(result)


var age=18
var result=age >= 18 ? "eligible " : "not eligible to vote"
console.log(result)

// ternary operator ->
// 1.for simple conditions
// 2.when assigning value based on a condition
//3.to write a short code
var num=0
var result=num % 2=== 0 ? "even " : "odd"
console.log(result)

// if else statement
// 1.for multiple conditions
//2.when executing several statements
//3.when readability is more important
var marks=85
if(marks >=90){
    console.log("grade a")
}else if(marks=75){
    console.log("grade b")
}else {
    console.log("grade c")
}


//loops
//1.for loop
//2.while loop
//3.do while
//4.for of
//5.for in
//6.for each

//for loop
//used when we know how many times the loop should run
for(  i=1;i<=5;i++){
    console.log("count",i)
}

//while loop
//used when the number of iterations is not known before executing
var i = 1
while(i<=5){
    console.log("count",i)
    i++
}

// do while
//executes the code at least once, even if the condition is false
var i =1
do{
    console.log("count",i)
    i++
} while (i<=5)


// for of loop
//used to iterate over arrays and strings
let fruits =['apple','banana','pineapple','guava']
for (let fruit of fruits){
    console.log(fruit)
}

// for in loop
// used to iterate over object properties
var student ={
    name : "hello",
    age: 22,
    course: "javascript"
}
for (let key in student){
    console.log(key + ":" + student[key])
}

//infinite loops
var i= 5
while (i<=10){
    console.log(i)
    i++
}

//ways to prevent infinite loops
// 1.always provide a valid exit condition
//2.update the loop variable inside the loop
// verify condition eventually becomes false
// use break when specific condition is met

let z=1
while(true){
    console.log(z)
    if(z===5){
        break;
    }
    i++
}

//functions
//function is a reusable block of code that performs a specific task.Instead of writing the same code multiple times,can 
// place it inside a function and call it whenever needed

function functionName(){

}
//types of functions
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



//passing arguments
function come(name){
    console.log("hello"+name)
}
come("mohan")

//multiple arguments
function add(a,b,c){
    console.log("sum=",a+b)
}
add (10,20,80)

//default parameters
function mohan(name="patel"){
    console.log("hello",+name)
}
mohan()
mohan("sankurthi")
//if no argument is passed , patel is used as default 


//using the argument object
function sum(){
    let total=0
    for(i=0;i<arguments.length;i++){
        total+=arguments[i]
    }
    console.log("sum=",total)
}
sum(10,20,30,40)

function findMax(){
    let max=arguments[0]
    for(i=1;i<arguments.length;i++){
        if(arguments[i]>max){
            max=arguments[i]
        }
    }
    console.log("maximum=",max)
}
findMax(10,89,93,76,23)

//using rest parameters(...)-> collects multiple arguments into an array
function sums(...numbers){
    let total=0
    for(let num of numbers){
        total+=num
    }
    console.log("sum=",total)
}
sums(10,30,40,80)

function findMaxs(...numbers){
let maxs= numbers[0] 
for (let num of numbers){
    if(num>max){
        maxs=num
    }
}
console.log("maximum=",maxs)
}
findMaxs(90,99,43,100)

//  feature                    Argument Object              rest parameter
//  introduced in              older JS                        ES6
//  Type                       array like Object           real array
//  available in               regular functions only      regular and arrow functions
//  syntax                     automatic                   must be declared with ...

function show(){
    console.log(arguments)
}
show(10,30,69)

function show(...numbers){
    console.log(numbers)
}
show(10,20,30)


// Usecases
// use args when 
// maintaining older js Code 
// working with legacy applications

// use rest parameter when
// writing modern js
// using arrow functions
// needing array methods