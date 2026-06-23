//1.Promise.all()
// Waits for all promises to succeed
// if one promise fails,it immediately goes to .catch()

let p1=Promise.resolve("HTMl")
let p2=Promise.resolve("CSS")
let p3=Promise.resolve("Java")
Promise.all([p1,p2,p3])
.then(result=>{
    console.log(result)
})
.catch(error=>{
    console.log(error)
})

//if one fails
let p4=Promise.resolve("HTMl")
let p5=Promise.reject("CSS Error")
let p6=Promise.resolve("Java")
Promise.all([p4,p5,p6])
.then(result=>{
    console.log(result)
})
.catch(error=>{
    console.log(error)
})

//2.Promise.race()
//returns  the result of the first promise that settles (success or failure)
// other promises are ignored
let p7= new Promise(resolve=>
    setTimeout(()=> resolve("First"),1000)
)
let p8= new Promise(resolve =>
    setTimeout(()=>resolve("Second"),2000)
)
Promise.race([p7,p8])
.then(result=>console.log(result))

//failure example
let p9= new Promise((resolve,reject)=>
    setTimeout(()=> reject("Failed"),1000)
)
let p10= new Promise(resolve =>
    setTimeout(()=>resolve("Sucess"),2000)
)
Promise.race([p9,p10])
.then(result=>console.log(result))
.catch(error=>console.log(error))

//3.Promise.allSettled()
//waits for all promises to finish
//doesnot matter whether they succeed or fail
//returns status of each promise
let p11=Promise.resolve("HTMl")
let p12=Promise.reject("CSS Error")
let p13=Promise.resolve("Java")
Promise.allSettled([p11,p12,p13])
.then(result => console.log(result))

//4.Promise.any()
//returns the first successful promise
//ignores rejected promise
//fails only if all promises fails
let p14=Promise.reject("Server 1 Down")
let p15 = new Promise(resolve =>
    setTimeout(()=> resolve("Server 2 Response"),2000)
)
let p16 = new Promise(resolve =>
    setTimeout(()=> resolve("Server 3 Response"),3000)
)
Promise.any([p14,p15,p16])
.then(result=>console.log(result))
.catch(error=> console.log(error))

//all fail example
let p17 = Promise.reject("Error 1")
let p18 = Promise.reject("Error 2")
Promise.any([p17,p18])
.then(result=>console.log(result))
.catch(error=> console.log(error))

//promise.all() -> all promises succeed
//promise.race() -> first settled promise wins
//promise.allSettled -> waits for all
//promise.any() -> first successful promise wins

//comparison
// Method                      waits for                   returns                     if one fails
// promise.all()               all promises                array of results            entire promise fails immediately
// promise.race()              first settled promise       first success or failure    returns first failure if it settles first
// promise.allSettled ()       all promises                status of every promise     doesnot stop for failures
// promise.any()               first sucessful promise     first success value         fails only if all fail

//1.promise.all()
//behaviour->
//waits until every promise is fulfilled
//if any promise rejects,the entire operation rejects immediately
Promise.all([
    Promise.resolve("HTML"),
    Promise.resolve("CSS"),
    Promise.resolve("Java")
])
.then(data=>console.log(data))

//2.promise.race() 
//returns the first promise that settles
//doesnot matter whether it succeeds or fails
let fast=new Promise(resolve=>
    setTimeout(()=> resolve("Fast API"),1000)
)
let slow=new Promise(resolve=>
    setTimeout(()=> resolve("Slow API"),2000)
)
Promise.race([fast,slow])
.then(result=>console.log(result))

//3.promise.allSettled() 
//waits for all promises
//returns both sucesses and failures
Promise.allSettled([
    Promise.resolve("HTML"),
    Promise.resolve("CSS"),
    Promise.resolve("Java")
])
.then(data=>console.log(data))

//4.promise.any()
//waits for the first successful promise
//ignores rejected promise
//rejects only when all promises fail
Promise.any([
    Promise.reject("Server 1 down"),
    Promise.resolve("Server 2 down"),
    Promise.resolve("Server 3 down")
])
.then(data=>console.log(data))

//async/await is just a cleaner way to work with Promises.
//it makes asynchronous code looks like synchronous code
//promise version
function get(){
    return Promise.resolve("Mohan")
}
get()
.then(user=>{
    console.log(user)
})
.catch(error=>{
    console.log(error)
})
//Async/Await version
function get1(){
    return Promise.resolve("Mohan")
}
async function displayUser(){
    try{
        const user = await get1()
        console.log(user)
    }catch(error){
        console.log(error)
    }
}
displayUser()

//try..catch is used with async/await to handle errors that occur in asynchronous operations
function getData(){
    return Promise.reject("Server Error")
}
async function fetchData(){
    try{
        const result = await getData()
        console.log(result)
    }catch(error){
        console.log("Error:",error)
    }
}
fetchData()

//using finally
async function test(){
    try{
        let result = await Promise.resolve("Success")
        console.log(result)
    }catch(error){
        console.log(error)
    }finally{
        console.log("Completed")
    }
}
test()

//Object and Array Destructuring in JS
//Destructuring allows to extract values from objects and arrays and store them in variables easily
//Object destructuring
const student ={
    name : "Mohan",
    age :  24,
    course : "java"
}
const{name,age}=student
console.log(name)
console.log(age)

//array destructuring
const colors=["Red","Green","Blue"]
const [first,second]=colors
console.log(first)
console.log(second)

//Iterator and Generator in JS
//Iterator -> its an object that allows to traverse elements one by one
//array iteraror
const fruits = ["apple","banana","mango"]
const iterator = fruits[Symbol.iterator]()
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())

//custom iterator
const numbers={
    start:1,
    end:3,
    [Symbol.iterator](){
        let current =this.start
        let last=this.end
        return{
            next(){
            if(current <= last){
                return{
                    value:current++,
                    done:false
                }
            }
            return{
                done:true
            }
        }
    }
}
}
for(let num of numbers){
    console.log(num)
}

//Generator-> its a special function that can pause and resume execution
//it uses:
//function*
//yield
function* greet(){
    yield "Hello"
    yield "Welcome"
    yield "JS"
}
const gen = greet()
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())

//number generator
function* numbers1(){
    let i=1
    while(i<=5){
        yield i
        i++
    }
}
for(let num of numbers1()){
    console.log(num)
}

// Iterator                        Generator
// manually create next()          Automatically provides next()
// more code                       less code
// harder to write                 easier to write
// uses Symbol.iteraror            uses function*
// controls iteration manually     uses yield to pause execution

//Normal functions vs Generator function
// Feature	            Normal Function	                        Generator Function
// Declaration     	function myFunc() {}	                function* myGen() {}
// Execution	        Runs from start to finish when called	Can pause and resume execution
// Return Value	    Returns a single value using return	    Returns a generator object
// Yielding Values	    Cannot yield values	                     Uses yield to produce multiple values
// State Preservation	Does not preserve execution state after return	Preserves local state between pauses
// Iteration	        Not inherently iterable	                Implements the iterator protocol
// Memory Usage    	May require storing all results at once	Produces values on demand (lazy evaluation)
//Example: Normal Function
function getNumbers() {
    return [1, 2, 3];
}
console.log(getNumbers());
//Example: Generator Function
function* getNumbers() {
    yield 1;
    yield 2;
    yield 3;
}

const gen1 = getNumbers();

console.log(gen1.next())
console.log(gen1.next())
console.log(gen1.next())
console.log(gen1.next())