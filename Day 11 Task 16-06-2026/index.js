//Object copying techniques
//->normal copy
//->deep copy
//->shallow copy

var obj = {a:"one", b:"two",c:"three",obj:{a:"hello",b:"hai"}}
console.log(obj)

//normal copy -> with the help of assignmemt operator(=)
var obj1= obj

console.log(obj)
console.log(obj1)
obj.a="a"
obj1.d="four" //adding new key value pair

console.log("obj1",obj1)  
console.log(obj)

//disadvantage => temperory modification in new object also modifies in original object

//shallow copy -> with the help of spread operator(...)
var original = {one:"a", two:"hello",c:20,obj:{a:"hello",b:"hai"}}
var copy = {...original}
copy.name="Hi"
copy.obj.a="good"
original.k="bye"
console.log("copy",copy)
console.log("original",original)

//for primitive datatypes will not change whereas reference data types will change

//deep copy -> JSON.parse and JSON.stringify
var copy1 = JSON.parse(JSON.stringify(original))
console.log("copy1",copy1)
copy1.one="bye"
copy1.obj.a="hey"
console.log("copy",copy1)
console.log("original",original)

//copying arays
var arr = [12,45,67,90]

//normal copy
var copy = arr
console.log("arr",arr)
arr[0]=10
//console.log("arr",arr)
console.log("copy",copy)

//shallow copy          
var copy1 = {...arr}
copy1[0]= 999
console.log("original",arr)
console.log("copy",copy1)

//examples using Object copying techniques
//normal copy -> a normal copy does not create a new object.Both variables point to the same object in memory
const original4 = {
    name : "Mohan",
    age : 24
}
const copy4  = original4
copy4.age = 25
console.log(original4.age)
console.log(copy4 .age)


//shallow copy(...) -> creates a new top-level object, but nested objects are still shared
const original5 = {
    name : "Mohan",
    address : {
        city : "Karimnagar"
    }
}
const copy5 = {...original5}
copy5.name= "patel"
copy5.address.city = "jagtial"
console.log(original5)
console.log(copy5)

//deep copy (JSON methods) -> creates a completely independent copy
const original6 = {
    name : "Mohan",
    address : {
        city : "Karimnagar"
    }
}
const copy6 = JSON.parse(JSON.stringify(original6))
 copy6.name = "Sankurthi"
 copy6.address.city = "Hyderabad"
 console.log(original6)
 console.log(copy6)

 //comparison of normal , shallow and deep copy
//  Feature                                Normal copy         shallow copy            deep copy
//  1.create a new project                      No                   Yes                   Yes
//  2.copies top-level properties           Reference only         Yes                     Yes
//  3.copies nested objects                  Reference only        Reference only          completely copied
//  4.Changes affect original object           Yes             only nested objects         No
//  5.memory usage                             low                 medium                  High
//  6.performance                              fastest             fast                    slower

// normal copy-> both variables refer to the same Object.Any change affects both
// shallow copy -> top-level properties are copied, but nested objects are still SharedArrayBuffer
// deep copy -> original and copied objects are completely independent

//shallow copying using spread operator and Object.assign()

//using spread operator (...) -> creates a new object and copies all top-level properties from the original object
const original7 ={
    name : "Mohan" ,
    age : 29
}
const copy7 = {...original7}
copy7.age=60
console.log("Original : " ,original7)
console.log("Copy :",copy7)

//using Object.assign() -> copies all enumerable properties from one object to another
const original8 ={
    name : "Mohan" ,
    age : 29
}
const copy8 = Object.assign({},original8)
copy8.age=78
console.log("Original : " ,original8)
console.log("Copy :",copy8)

//deep copying using JSON methods -> creates completely independent copy of an object, including all nested objects
//const deepCopy = JSON.parse(JSON.stringify(originalObject))
//using simple object
const original9 = {
    name : "Mohan",
    age : 34
    }
const copy9 = JSON.parse(JSON.stringify(original9))
 copy9.age = 45
 
 console.log("Original:",original9)
 console.log("Copy:",copy9)

//using object with nested objects
 const original10 = {
    name : "Mohan",
    address : {
        city : "Karimnagar",
        state : "Telangana"
    }
}
const copy10 = JSON.parse(JSON.stringify(original10))
 
 copy10.address.city = "Hyderabad"

 console.log("original:",original10)
 console.log("copy:",copy10)

//using array of objects
const original11 = [
    {name : "Mohan"},
    {name : "Patel"}
]
const copy11 = JSON.parse(JSON.stringify(original11))
copy11[0].name = "Sankurthi"
console.log(original11)

//behaviour and differences between object copying approaches

//normal copy
// -> copies only the reference of the Object
// -> both variables point to the same memory location
// -> changes made through one variable are reflected in the other
const original12 = {name : "Mohan"}
const copy12 = original12
copy12.name = "Patel"
console.log(original12.name)

// advantages :
// fastest approach
// uses minimal memory

// disadvantages :
// original object can be modified unintentionally
// not suitable when an independent copy is reqruired

//shallow copy -> Spread operator / Object.assign()
// creates a new top-level object
// primitive properties are copied independently
// nested objects and arrays are copied by reference
const original13 = {
    name : "Mohan",
    address : {
        city : "Karimnagar"
    }
}
const copy13 = {...original13}
copy13.address.city = "jagtial"
console.log(original13.address.city)

// Advantages:
// creates a separate top-level Object
// easy to implement
// better than normal copy for simple objects

// disadvantages
// nested objects remain shared
// changes to nested properties affect the original object

//deep copy(JSON Methods)
// creates a completely independent copy
// copies all nested objects and arrays
// changes in the original object do not affect the original
const original14 = {
    name : "Mohan",
    address : {
        city : "Mallial"
    }
}
const copy14 = JSON.parse(JSON.stringify(original14))
 
 copy6.address.city = "Maddutla"
 console.log(original14.address.city)

//  advantages:
//  original and copies objects are completely independent
//  safe for complex nested data structures

//  disadvantages:
//  slower than normal and shallow copy
//  Functions,undefined, and special objects like Date are not preserved correctly
     


