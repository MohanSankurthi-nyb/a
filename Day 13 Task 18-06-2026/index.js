//Document Object Model(DOM)
// It will attach the document in the form of a tree structure
//HTML
//Head (Meta Tags) and Body(content)

//it is a programming interface for HTML and XML documents.it represents a web page as a tree-like structure of objects,
//allowing JS to access,modify,add or remove elements dynamically.

// DOM Structure 
// Document
// |-> html 
//     |->head 
//     |  |->title 
//     |
//     |->body
//        |->h1
//        |->p

//DOM hierchy
//DOM follows parent-child relationship
{/* <body>
    <div>
        <h1>Heading</h1>
        <p>paragraph</p>
    </div>
</body>  */}

// body(Parent)
//  |->div(Child of body)
//     |->h1(Child of div)
//     |->p (Child of div)

//selecting dom element
//getElementById()
//getElementByClassName
//getElementByTagName
//querySelector
//querySelectorAll

//getElementById()-> selects an element by its id
let element = document.getElementById("DOM")
console.log(element)
//console.log(element.textContent)

//getElementByClassName()-> selects an element by its classname
let elements= document.getElementsByClassName("msg")
// console.log(elements[0].textContent)
// console.log(elements[1].textContent)
console.log(elements)

//getElementByTagName -> selects an element by its tagname
let c = document.getElementsByTagName("h1")
console.log(c)
// for (let p of c){
//     console.log(p.textContent)
// }

//querySelector
let e = document.querySelector(".msg")
console.log(e)
// console.log(e.textContent)

//querySelectorAll
let w = document.querySelectorAll(".msg")
console.log(w)
//console.log(w.textContent)

let a = document.getElementById("DOM")
console.log(a.textContent)
a.textContent="JAVASCRIPT"

let input = document.getElementById("name")
console.log(input.value)
document.querySelector(".msg").style.color="red"


//DOM traversal -> allows to move between related HTML elements

//parent element traversal
//returns the parent of an element
let para= document.getElementById("para1")
console.log(para.parentElement)

//child element traversal
//returns all child elements
let parent = document.getElementById("parent")
console.log(parent.children)

 //sibling element
 //1.nextElementSibling
 let p1 = document.getElementById("para1")
 console.log(p1.nextElementSibling)
 //1.previousElementSibling
 let p2 = document.getElementById("para2")
 console.log(p2.previousElementSibling)

 //creating DOM elements dynamically
 //JS can create, add,modify and remove HTML elements without writing them directly in HTML

 //create and append an element
 let newPara = document.createElement("p")
 newPara.textContent = "hello,DOM"
 document.getElementById("container").appendChild(newPara)

 //create a heading dynamically
 let heading = document.createElement("h2")
 heading.textContent = "Welcome to JS"
 document.body.appendChild(heading)

 //create a button dynamically
 let btn = document.createElement("button")
 btn.textContent="Click Me"
 document.body.appendChild(btn)

 //add css styles dynamically
 let box = document.createElement("div")
 box.textContent="styled box"
 box.style.backgroundColor = "yellow"
 box.style.padding = "10px"
 document.body.appendChild(box)

//  createElement() = creates a new element
//  appendChild() = adds an element as a child 
//  prepend() = adds at the beginning
//  append() = adds one or more elements
//  setAttributes = sets an setAttributes
//  remove() = removes an element
//  replaceChild() = replaces an existing child

//adding eles with appendChild()
let para3 = document.createElement("p")
para3.textContent= " This is a new para"
document.getElementById("container").appendChild(para3)

//adding eles with append()
let Heads= document.createElement("h2")
Heads.textContent = "Welcome"
document.body.append(Heads)

//adding eles at the beginning with prepend()
let msg1 = document.createElement("p")
msg1.textContent="first element"
document.body.prepend(msg1)

//removing an ele with remove()
let ele=document.getElementById("demo")
ele.remove()

//removing a child with removeChild()
let parent1 = document.getElementById("parent1")
let child1 = document.getElementById("child1")
parent1.removeChild(child1)

//Event listeners => allows js to respond to user actions such as clicks,keyboard input,mouse movements,and form submissions
//click event
let button = document.getElementById("btn")
button.addEventListener("click",function(){
    alert("button clicked")
})

//double click event
document.getElementById("dblbtn")
.addEventListener("dblclick",function(){
    console.log("Button double clicked")
})

//mouse over event
let text1=document.getElementById("text1")
text1.addEventListener("mouseover",function(){
    text1.style.color="red"
})

//mouse out event
text1.addEventListener("mouseout",function(){
    text1.style.color="black"
})

//input event
document.getElementById("inputbox")
.addEventListener("input",function(event){
    console.log(event.target.value)
})