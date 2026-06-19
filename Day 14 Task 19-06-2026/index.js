//DOM
//Represents HTML as Objects 

// select elements
// 1.getElementById()
// 2.getElementByClassName()
// 3.getElementByTagName()
// 4.querySelector()
// 5.querySelectorAll()

//Modify content
// 1.innerHTML
// 2.innerText
// 3.textContent

// Attributes
// 1.getAttribute()
// setAttribute()
// 3.removeAttribute

// create/remove elements 
// createElement()
// append()
// appendChild()
// prepend()
// remove()

//traversal
// 1.parentElement
// 2.children
// 3.firstElementChild
// 4.lastElementChild
// 4.nextElementSibling
// 5.previousElementSibling

//events
// click
// mouseover
// keydown
// submit
// input

//event methods
//addEventListeners()
//preventDefault()

//setTimeout() and setInterval() are the timer functions used to execute code after a delay or repeatedly at specified intervals
//1.setTimeout()
//executes a function once after a specifies delay
// syntax = setTimeout(function,delayInMilliseconds)

console.log("Start")
setTimeout(()=>{
    console.log("Hello after 2 seconds")
},2000)
console.log("End")

//2.setInterval()
//executes a function repeatedly after every specified interval
//setInterval(function,intervalInMilliseconds)

setInterval(()=>{
    console.log("Running...")
},1000)

//digital clock using setInterval()
// setInterval(()=>{
//     const now = new Date()
//     console.log(now.toLocaleTimeString())
// },1000)

//stopping timers
//clearTimeout()
let timer1 =setTimeout(()=>{
    console.log("This wont run")
},5000)
clearTimeout(timer1)

//clearInterval()
let count = 1
let valid = setInterval(()=>{
    console.log(count)
    count++
    if(count > 5){
        clearInterval(valid)
    }
},1000)

// to stop a clock after 5 seconds
let clock = setInterval(()=>{
    console.log(new Date().toLocaleTimeString())
},1000)
setTimeout(()=>{
    clearInterval(clock)
    console.log("Clock stopped")
},5000)

//setInterval()   executes a function repeatedly at a fixed interval
//clearInterval()  stops that repeated execution using the interval ID returned by setInterval()

//countdown timer
let timeLeft = 10
let countDown = setInterval(()=>{
    console.log(timeLeft)

timeLeft--
if(timeLeft<0){
    clearInterval(countDown)
    console.log("Times Up!")
}
},1000)


//Synchronous and Asynchronous Executions 

//Synchronous Execution
//in this execution,code runs line by line, and each statement waits for the previous one to finish

console.log("Start")
console.log("Middle")
console.log("End")

// Flow
// Start
//  |
// Middle
//  |
// End
//The next line executes only after the current line completes

//Asynchronous Execution
//In this execution,some operations take time(timers,API calls,file reading,etc)>JS does not wait for them to finish
//and continues executing the next statement

console.log("Start")
setTimeout(()=>{
    console.log("Inside setTimeout")
},2000)
console.log("End")

// Flow
// Start
//  |
// setTimeout registered
//  |
// End
//  |
// (After 2 seconds)
// Inside setTimeout

//JS uses Asynchronous Execution because to keep web pages responsive 
//if js waits for every slow task, the page would freeze

//Comparison
// Synchronous                         Asynchronous
// Executes line by line               Doesnot wait for long tasks
// Blocking                            Non-Blocking
// Simple flow                         Uses callbacks,promises,async/await
// Ex: calculations,loops              Ex: timers,API calls,file operations