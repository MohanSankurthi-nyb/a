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

 
(function (){
    var message="hello";
    console.log(message);
})();
 //console.log(message);

 //this keyword -> refers to the object that is currently executing the function
 //in global scope
 console.log(this)
 //in regular function
 function show(){
    console.log(this)
 }
 show()
 //inside an object method
 const person = {
    name : "Mohan",
    greet : function(){
        console.log(this.name)
    }
 }
 person.greet()
 //inside an arrow function
 const person1={
    name1 : "navya",
    greet1  : ()=>{
        console.log(this.name1)// undefined
    }
 }
 person1.greet1()

 //object with a regular function
 const student = {
    name2 : "mona",
    great:function(){
        console.log("hello,my name is" + this.name2);
    }
 }
 student.great()
 
 //object with an arrow function
 const student1={
    name3 : "bunty",
    great3 : ()=>{
        console.log("hello,my name is "+ this.name3) //undefined
    }
 }
 student1.great3()

 //call() apply() bind() -> used to control the value of this keyword inside a function
 //1.call()-> invokes a function immediately and allows you to pass arguments one by one
 function introduce(city,country){
    console.log(
        "my name is "+ this.names +
        ",I live in "+city +
        "," + country
    );
 }
 const per={
    names: "Mohan"
 };
 introduce.call(per,"Jagtial","India");

 //2.apply()-> arguments are passed as an array
 function introduces(city,country){
    console.log(
        "my name is "+ this.names +
        ",I live in "+city +
        "," + country
    );
 }
 const per1={
    names:"Mohan"
 };
 introduces.apply(per1,["Jagtial","India"]);

 //3.bind()-> doesnot execut the function immediately.Returns a new function with this permanently bound to speciufic object
 function introduce1(city){
    console.log(
        "my name is "+ this.names +
        ",I live in "+city 
    );
 }
 const pers={
    names: "Mohan"
 };
 const boundFunction=introduce1.bind(pers)
 introduce.call(pers,"Jagtial","India");

//Reference of this changes in different scenario
 //in global scope -> in browsers,this refers to global object
 console.log(this)
 //in regular function-> in non-strict mode,this refers to global object,in strict mode this becomes undefined
 "use strict";
 function show1(){
    console.log(this)
 }
 show1()
//inside an object method-> greet() is called by person,therefore,this refers to person object
 const person5 = {
    name5 : "Mohan",
    greet5 : function(){
        console.log(this.name5)
    }
 }
 person5.greet5()
 // arrow function inside an object-> arrow function do not have their own this
 const student10={
    name10 : "bunty",
    great10 : ()=>{
        console.log("hello,my name is "+ this.name10) //undefined
    }
 }
 student10.great10()

