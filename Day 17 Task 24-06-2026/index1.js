import {add,subtract} from "./index.js"
import greet from "./index.js"
console.log(add(10,5))
console.log(subtract(10,5))

console.log(greet(`Mohan`))

//Local storage
//it is a browser feature that allows to store data as key-value pairs in users browser
//data remains even after the browser is closed
//data is stored as strings
//storage limit is about 5mb to 10mb depending on browser

//methods of local storage
//1.setItem() = store data
//2.getItem() = retrieve data
//3.removeItem() = remove specific data
//4.clear() = remove all data

localStorage.setItem("name","Mohan") //store data using setItem()

let name = localStorage.getItem("name")//retrieve data using getItem()
console.log(name)

//Session storage
//it is a browser storage mechanism used to store data as key-value paies for the duration of a browser tab session
//data is available while tab is open
//data is automatically deleted when the tab or browser is closed
//data is stored as strings

//methods of session storage
//1.setItem() = store data
//2.getItem() = retrieve data
//3.removeItem() = remove specific data
//4.clear() = remove all data

sessionStorage.setItem("name","Navya") //store data using setItem()

let names = sessionStorage.getItem("name")//retrieve data using getItem()
console.log(names)

//Browser storage persistance
//persistance means how long the data stays stored in the browser
//there are mainly two browser storage types:
//1.local storage -> data stays until manually stored
//2.session storage -> data stays only until the tab is closed
 
//ex 1: local storage persists after refresh
localStorage.setItem("username","Mona") //store data
console.log(localStorage.getItem("username")) //retrive data

//ex 2: session storage persists after refresh
sessionStorage.setItem("username","Mona") //store data
console.log(sessionStorage.getItem("username")) //retrive data

//ex 3: session storage removed after closing tab
sessionStorage.setItem("username","Moni")//store data
console.log(sessionStorage.getItem("username"))//retrive data

//4.local storage after closing browser
localStorage.setItem("theme","dark")
console.log(localStorage.getItem("theme"))

//exception handling
//try -> code that may cause an error
//catch -> handles the error if one ocuurs
//finally -> always executes whether an error occurs or not
//throw -> creates a custom error

try{
    console.log("Try block started")
    let result = 10/2
    console.log(result)
}
catch(error){
    console.log(error.message)
}
finally{
    console.log("Finally block executed")
}

//example with error
try{
    console.log(num)
}
catch(error){
    console.log("Error:",error.message)
}
finally{
    console.log("program finished") // finally runs when an error occurs
}

//throw statement
//throw is used to create your own errors
let age=15
try{
    if(age < 18){
        throw "You are not eligible to vote"
    }
    console.log("You can vote")
}
catch(error){
    console.log(error)
}

//custom error handling 
//useful when we want to provide meaningful messages instaed of generic Javascript errors

function register(age){
    try{
        if(age < 18){
            throw new Error("Minimum age for registration is 18")
        }
        console.log("Registration successful")
    }
    catch(error){
        console.log(error.message)
    }
}
register(16)

//bank withdrawl
function withdraw(balance,amount){
    try{
        if(amount > balance){
            throw new Error("Insufficient balance")
        }
        console.log("withdrawl successful")
    }
    catch(error){
        console.log(error.message)
    }
}
withdraw(5000,8000)