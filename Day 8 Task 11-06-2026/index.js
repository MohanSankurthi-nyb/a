//IIFE ( Immediately Invoked Function Expression)
//It is a function that runs immediately after it is defined
(function (){
  console.log("IIFE");
})();

//example with parameters

 (function(hi){
    console.log("hello "+hi);
 })("Mohan");


//using arrow function
 (()=> {
    console.log("arrow IIFE ");
})();

//random number generation using IIFE
 (function () {
    const randomNumber1=  Math.floor(Math.random() * 1000)+1;
    console.log("random number:",randomNumber1);
})();

 (function (marks){
    if(marks >= 35){
        console.log("Pass")
} else{
        console.log("fail")
   }
 })(67)

//function currying -> multiple functions with single parameter
//Instead of passing all agruments at once, we can pass them one by one
function multiply(a){
    return function(b){
        return a * b
    }
}
console.log(multiply(10)(20))

//first class function -> a function that can be stored in a variable and can be passed as an argument and can be 
// returned from another function

//assigning a function to a variable
const hello = function () {
    console.log("hello")
} 

//passing a function as an Argument
function hello1(){
    console.log("hello")
}
function execute(fn){
    fn()
}

//returning a function from another function 
function outer(){
    return function(){
        console.log("returned function")
    }
}
const result=outer()
result()

//calculate n
function add1(d,e){
    return d+e
}
function calculate(d,e,operation){
    return operation(d,e)
}
console.log(calculate(10,20,add1))

//pure function -> output can be guessed by a user
//impure function -> value cannot be guessed by a user
//higher order function 

//js program to generate random number from 1 to 100
function randomNumber(){
    return Math.floor(Math.random()*100)+1
}
console.log(randomNumber() )


// Closure-Based functions => occurs when an inner function remembers and can access variables from its outer function
// even after outer function has finished executing

function createCounter(){
    let count=0;
    return function(){
        count++;
        return count;
    };
}
const counter = createCounter();
console.log(counter());
console.log(counter());
console.log(counter());

function greet(message){
    return function(name){
        console.log(message + ":" + name)
    }
}
const say= greet("hello")
say("mohan")
say("navya")

//pure function => always produces the same output for the same input and does not modify the external data
//example
function total ( price, quantity){
    return price * quantity
}
console.log(total ( 100,2)) //200
console.log(total ( 100,2)) //200

function sum(m,n){
    return m + n
}
//real world scenario -> an e-commerce website calculating the total cost of items in a cart

//impure function => depends on or modifies data outside the function,output may vary even with same input
let balance =1000
function deposit(amount){
    balance += amount
    return balance
}
console.log(deposit(500)) //1500
console.log(deposit(500)) //2000

let tax = 23
function calculatePrice(price){
    return price + (price * tax / 100)
}

// pure                         impure
//only uses input values        uses or modifies external data
//same input-> same output      same input may give different output
// more preditable              less predictable