
var a=10
var abc=`30`
var name="mohan"
var bool=true
var k
var m=null

console.log(a)
console.log(abc)
console.log(name)
console.log(bool)
console.log(k)
console.log(m)

//typeOf operator
console.log(typeof(a))
console.log(typeof(abc))
console.log(typeof(name))
console.log(typeof(bool))
console.log(typeof(k))
console.log(typeof(m))

//datatytpes->
//1.Primitive datatytpes =
//string {" ",` `} , number , boolean ,undefined ,null, big int,symbol

//string -> 
let names="basha"
console.log(names,typeof(names))
//number->
let age=24;
console.log(age,typeof(age))
//boolean->
let isStudent = true
console.log(isStudent,typeof(isStudent))
//undefined->
let city
console.log(city,typeof(city))
//null->
let data=null
console.log(data,typeof(data))//object 
//BigInt->
let large = 1234567890987654321n
console.log(large,typeof(large))
//symbol->
let id=Symbol("userId")
console.log(id,typeof(id))



var string="hello"
var m='hello'
var n=`hello`
console.log(string,typeof(string))
console.log(m,typeof(m))
console.log(n,typeof(n))
//typeof

//Rules for writing the variable names
//->it should start with character (alphabet) or _
//->it should not start with number
//-> it should not contain white spaces or special characters

//Errors-> Syntax error Reference error
var a= true
console.log(a)

//var b= False-> error because of reference error 
//console.log(b)-> False is not defined 

var m=90
//Assignment operator assigns the right side value to the left side operator

//undefined
var n= null
console.log(n)

 var i
 console.log(i)

 //var true = null
 // console.log(true) -> error keyword cannot be used as an name of the variable


 //Reference datatypes
 //Objects, arrays, functions , ES 6 (map, set, weak set)
 //date

 //Objects->Collection of key value pairs
 //enclosed in { }
 //each key and value will be separated by ":"
 //each key value pair will be separated by ","
 var obj={name:"mohan",role:"associate",city:"karimnagar",number:9876543210,male:true,salary:13500,attendance:{jan:25,feb:28}}
 console.log(obj)
 var a ={ }
 console.log(typeof(obj))

 //arrays
var arr=[1,3,5,"hello","mohan",true,null,[2,4,6,9,[35,67]]]
console.log(arr,typeof(arr))

//functions
function mohan(){
    console.log("how are you?")
}
mohan()

//calculation of salary based on number of working days
function salary(name,days){
    var perday=2000
    console.log("monthly salary of " ,name, "is",perday*days)
    console.log("execution completed")
    return perday*days
}
salary("navya",20) //arguments
salary("mona",26) 
salary("movya",19)
console.log("all the salaries are credited",typeof(salary))

//map-> data will be stored in key value pairs and keys can be of any data
var m={name: "mohan",1:"date",true:"value"}
console.log(m)
var l= new Map()
l.set("name","mohan")
l.set(1,"date")
l.set(true,"value")
console.log(l)


//comparison
//feature        primitive                  reference
//1.stored as    actual value               memory reference(address)
//2.types        string,number,boolean       object,array,function
 //               null,undefined,Symbol
 //               bigint
//3.comparison     compared by value        compared by reference

//primitive datatype comparison
let y = 100;
let z = 100;
console.log(y==z) //true

//reference datatypes
let obj1={name:"mona"}
let obj2={name:"mona"}
console.log(obj1==obj2) //false