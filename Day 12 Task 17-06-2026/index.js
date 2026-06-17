//for ...in loop -> to loop objects
//used to iterate over the properties(keys) of an object
//it goes through each property name one by one and allows you to aacess its value
//syntax:
// for (let key in object){
//     code
// }
//key -> represents the property name
//object[key] -> gives the value of that property

const person ={
    name : "Mohan",
    age : 23,
    city : 'Karimnagar'
}
for(let key in person){
    console.log(key, ":" ,person[key])
}
//for..in is mainly used for objects.For arrays,it is generally better to use
//for , for..of , and forEach()
//because for..in returns the array indexes(keys) rather than the actual values
const fruits = ["apple","banana","mango"]
for (let index in fruits)
    console.log(index)

//date
//creating a date object
let today = new Date()
console.log(today)

//getFullYear()
const date = new Date()
console.log(date.getFullYear())

//getMonth() -> Returns the month (0 = january , 11 = December)
const date1 = new Date()
console.log(date.getMonth())

//getDay() -> Returns the week (0 = sunday , 6 = saturday)
const date2 = new Date()
console.log(date2.getDay())

//calculate age
const birthYear = 2001
const currentYear = new Date().getFullYear()
const age= currentYear - birthYear
console.log("Your age is :",age)

//template string -> way to create strings using backticks () instead of single ('') or double ("") quotes (${})
const name = "Mohan"
const ages = 25
const message = `my name is ${name} and iam ${ages} years old`
console.log(message)

//using expressions
const num1 = 49
const num2 = 67
console.log(`Sum: ${num1 + num2}`)

//using dynamic object data
const emp ={
    names : "Mohan",
    role : "developer",
    salary : 237890
}
const details = `
Name : ${emp.names}
Role : ${emp.role}
Salary: ${emp.salary} `
console.log(details)

//using array data
const fruit = ["apple","banana","mango"]
console.log(`Available fruits are : ${fruit.join(",")}`)

//math object  -> built-in js object that provides properties and methods for performing mathematical calculations

//1.math.round() = rounds a number to the nearest integer
console.log(Math.round(4.4))
console.log(Math.round(4.7))

//2.math.floor() = rounds a number down to the nearest integer
console.log(Math.floor(4.9))
console.log(Math.floor(9.1))

//3.math.ceil() = rounds a number up to the nearest integer
console.log(Math.ceil(4.1))
console.log(Math.ceil(9.9))

//4.math.trunc() = removes the decimal part
console.log(Math.trunc(4.1))
console.log(Math.trunc(7.9))

//5.math.abs() = returns the absolute(positive) value
console.log(Math.abs(-98))
console.log(Math.abs(9))

//6.math.max() = returns the largest value
//math.min () = returns the smallest value
console.log(Math.max(10,30,50))
console.log(Math.min(10,30,50))

//7.Math.pow() = returns the power of a number
console.log(Math.pow(4,5))
console.log(Math.pow(7,9))

//8.math.random() = generates the number between 0 and 1
console.log(Math.random())
//to generate random OTP with four digits
const randomNumber = Math.floor(Math.random() * 10000) 
console.log("Otp is:",randomNumber)

//9.math.sqrt() 
console.log(Math.sqrt(9))

//string objects
//wrapper object around a string value.Allows to use variables built-in methods and properties for manipulating text
//1.length
let str = "javascript"
console.log(str.length)
//2.toUpperCase
console.log(str.toUpperCase())
//3.toLowerCase
console.log(str.toLowerCase())
//4.charAt()
console.log(str.charAt(4))
//5.indexOf
let str1= "i love javascript"
console.log(str1.indexOf("javascript"))
//6.includes()
console.log(str1.includes("love"))
//7.startsWith()
console.log(str1.startsWith("java"))
//8.endsWith()
console.log(str1.endsWith("script"))
//9.slice
console.log(str1.slice(0,4))
//10.substring()
console.log(str1.substring(7,11))
//11.replace()
console.log(str1.replace("javascript","java"))
//12.concat()
let firstname = "mohan"
let lastname = "patel"
console.log(firstname.concat(" ",lastname))

//example program combining all concepts
const student = {
    name : "Mohan",
    course : "sankurthi"
}
const Today = new Date()
for(let key in student){
    console.log(`${key} : ${student[key]}`)
}
console.log(`Name: ${student.name.toUpperCase()}`)
console.log(`Name Length : ${student.name.length}`)
console.log(
    `Login Date :${Today.getDate()}-${Today.getMonth()+1}-${Today.getFullYear()}`
)
const token = Math.floor(Math.random() * 10000)
console.log(`Login token:${token}`)



