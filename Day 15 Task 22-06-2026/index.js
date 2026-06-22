//Event bubbling
// Event Bubbling means an event starts from the target element(the element clicked) and moves upward
// through its parent element

//example flow from HTML page
// Button -> Parent -> Grandparent
//the event bubbles upward from the child element

//Event Capturing
//also called as trickling is the opposite of bubbling
//the event starts from the outermost parent and moves downward to the target element
//to enable capturing,pass true as third argument to addEventListener()

//example flow from HTML page
//Grandparent -> Parent -> Child
//the event travels downward to the target element

//Comparison
// feature                 event bubbling              event capturing
// direction               child -> parent             parent -> child
// default behaviour           yes                         no 
// addEventListener()        false(default)                true
// flow                    bottom -> top                 top -> bottom

//event delegation
//it is a technique where a single event listener is attached to a parent element to handle events for its child
//elements using event bubbling and event.target.
//It is useful for dynamically added elements and improves performance

//uses 
// ->fewer event listeners
// ->better performance
// ->works with dynamically created elements 
// -> cleaner code

const container = document.getElementById("container")
container.addEventListener("click",(event)=>{
    if(event.target.tagName === "BUTTON"){
        console.log(event.target.textContent)
    }
})
//add buttons dynamically
let count =3
document.getElementById("addBtn").addEventListener("click",()=>{
    const btn = document.createElement("button")
    btn.textContent= `Button ${count++}`
    container.appendChild(btn)
})

//Throttling
//to control or limit something
//In JS,throttling limits how many times a function can run in a given time period
//Even if an event happens many times,throttling allows the function to run only at fixed intervals 

//Debouncing
//Debouncing delays execution until the user stops performing actions
// means to ignore repeated triggers until things become stable
//ex: Search Box waits until the user stops typing.

//callback functions
//it is a function passed as an argument to another function and executed later
function greet(callback){
    console.log("Hello")
    callback()
}
function bye(){
    console.log("Good bye")
}
greet(bye)

//practical scenarios -> Online Food Order
function prepareFood(callback){
    console.log("Preparing Food...")
    setTimeout(()=>{
        console.log("Food Ready")
        callback()
    },2000)
}
function deliverFood(){
    console.log("Food Delivered")
}
prepareFood(deliverFood)

//student exam result
function checkResult(marks,callback){
    if(marks>=35){
        callback("Pass")
    }else{
        callback("Fail")
    }
}
checkResult(80,(result)=>{
    console.log("student result:",result)
})

//promise
//it is an object that represents the result of an asynchronous operation
//in simple words,it is a js object that represents a value that will be available now,later or never
//has a 3 states
//1.pending -> waiting
//2.resolved -> success
//3.rejected -> failure

//.then() : Handles the success(resolved) case
//.catch() : Handles the failure(rejected) case

//1.online order
let order = new Promise((resolve,reject)=>{
    let paymentDone = true
    if(paymentDone){
        resolve("Order Confirmed")
    }else{
        reject("Payment Failed")
    }
})
order
.then((message)=>{
    console.log(message)
})
.catch((error)=>{
    console.log(error)
})

//using setTimeout()
let promise = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Data Loaded")
    },2000)
})
promise
.then((result)=>{
    console.log(result)
})
.catch((error)=>{
    console.log(error)
})

//rejected promise
let promise1 = new Promise((resolve,reject)=>{
    let internet =false
    if(internet){
        resolve("Connection")
    }else{
        reject("No internet connection")
    }
})
promise1
.then((result)=>{
    console.log(result)
})
.catch((error)=>{
    console.log(error)
})

// Feature             callback                promise
// definition          function passed as      Object representing
//                     an argument             future result
// readability         can become messy        cleaner and easy to read 
// error handling      manual handling         built-in .catch()
// chaining            difficult               easy with .then()
// modern usage        older approach          preferred approach

//ordering food using 
//1.callback based implementation
function orderFood(callback){
    setTimeout(()=>{
        console.log("Food is Ready")
        callback()
    },3000)
}
orderFood(()=>{
    console.log("Food is Delivered")
})

//2.promise based implementation
let foodPromise = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Food is Ready")
    },2000)
})
foodPromise
.then((result)=>{
    console.log(result)
    console.log("Food is Delivered")
})
.catch((error)=>{
    console.log(error)
})