var a =[1,2,3,4,6,89]
var b =["a","b","c","d","e"]
console.log(a,b)
var c= a.concat(b)
console.log(c)

var d=[...a,...b] //rest parameter
console.log(d)

for (k of d){
    console.log(k)
}
//The for...of loop is used to iterate over the values of iterable objects
//such as arrays, strings, maps, sets, and more.

// The for...in loop is used to iterate over the keys (property names) of an object.
const person = {
  name: "John",
  age: 25,
  city: "London"
};

for (const key in person) {
  console.log(key, person[key]);
}

var arr =[1,2,3,4,5]
for(i in arr){
    arr[i]=arr[i]+1
    console.log(arr)
}

for(i of arr){
    console.log(i)
}

//tesing the array
//some() and evey()
// => some - check if atleast one element matches
console.log(arr.some(i => i>1)) // results in true or false

const marks=[65,78,23,90,98]
const topper = marks.some(marks=> marks>90)
console.log(topper) //true 92> 90
                         
//every - check if all elements match
const ages=[22,45,19,67,90]
const Adults=ages.every(age => age >= 18)
console.log(Adults) // every age is above 18

// some() = atleast one element satisfies the condition
// every() = all elements satisfy the condition

//Loops
// 1.Using for loop -> to print all array elements
const fruits=["apple","banana","mango","orange"]
for(let i=0;i<fruits.length;i++){
    console.log(fruits[i])
}

//2. Using for of loop(directly accesses the values of an array) -> to print all student names
const students=["mohan","patel","sankurthi"]
for (const student of students){
    console.log(student)
}

//3.forEach() (executes a callback function once for each array element) ->to print all employess names
const emps=["navya","mona","sankurthi"]
emps.forEach(function(emp){
    console.log(emp)
})
// using arrow function
emps.forEach(emp => {
    console.log(emp)
})

//array methods
//1.join() -> to practice combining array eles into a single string using different separators
const fruit = ["apple","banana","mango"]
console.log(fruit.join(","))
console.log(fruit.join("-"))

//2. sort() -> to practice sorting strings and numbers in ascending and descending order
const numbers=[3,45,33,90,41,1]
numbers.sort((a,b)=> a-b)
console.log("acsending order",numbers)
numbers.sort((a,b)=> b-a)
console.log("descending order",numbers)

//3.map() -> to practice a creating new array by transorming existing array elements
const number = [1,2,3,4]
const squares = number.map(num => num * num)
console.log(squares)

//4.filter() -> to practice extracting eles that satisfy a given condition
const nums = [10,34,78,45,50,75,11]
const evenNum = nums.filter(num => num % 2 === 0)
console.log(evenNum)

//5.reduce -> to practice reducing array eles into a single value
const nu=[10,20,30,40]
const total = nu.reduce((sum,num) => sum + num,0)
console.log(total)

//remove duplicate eles from array
//1.set() -> stores only uniques values
const numbers1=[1,3,5,6,8,9,5,1,2,3,4]
const uniquenum1 =[...new Set(numbers1)]
console.log(uniquenum1)

//2.filter() 
const numbers2 =[1,3,5,6,8,9,5,1,2,3,4]
const uniquenum2=numbers2.filter((value,index,array) => array.indexOf(value) === index)
console.log(uniquenum2)

//3.forEach()
const numbers3 =[1,3,5,6,8,9,5,1,2,3,4]
let uniquenum3 = []
numbers3.forEach(num =>{
    if(!uniquenum3.includes(num)){
        uniquenum3.push(num)
    }
})
console.log(uniquenum3)

//sorting logic without using built-in sort()
//using bubble sort -> repeatedly compares adjacent eles and swaps them if they are in wrong order
const numbers4 = [2,7,0,4,5,10]
for(let i =0 ;i < numbers4.length -1 ; i++){
    for(let j =0 ;j < numbers4.length -1 - i ; j++){
        if(numbers4[j] > numbers4[j+1]){
            let temp = numbers4[j]
            numbers4[j] = numbers4[j+1]
            numbers4[j+1] = temp
        }
    }
}
console.log(numbers4)

//using selection sort() -> finds the smallest ele and places it at the correct position
const numbers5 = [2,7,0,4,5,10]
for(let i=0;i<numbers5.length;i++){
    let minIndex = i
    for(let j=i+1;j<numbers5.length;j++){
        if(numbers5[j]<numbers5[minIndex]){
            minIndex=j
        }
    }
        let temp=numbers5[i]
        numbers5[i]=numbers5[minIndex]
        numbers5[minIndex]=temp
}
console.log(numbers5)

//objects
// in objects data will be stored in key value pairs 
// keys will be of strings 
// value can be any of datatype
// key and value will be separated by :
// Each key value pairs will be separated by ,
// { }

//4 WAYS to create object
//1.objectliteral way -> created directly using {}
const person1={
    name : "mohan",
    age: 23,
    greet(){
        console.log("hello")
    }
}
console.log(person1.name)
person1.greet()


//2.new keyword -> create an object using the built-in constructor
const person2 = new Object()
person1.name = "Patel"
person1.age= 24
console.log(person1)

//3.constructor -> a function is used as a blueprint to create multiple objects
function Person2(name,age){
    this.name=name
    this.age=age
    this.greet=function (){
        console.log(`Hello, i am ${this.name}`)
    }
}
const person4 = new Person2("mokan",45)
const person5 = new Person2("mnoal",55)

person4.greet()
person5.greet()

//4.class-> provides a cleaner way to create object templates
class Person10{
    constructor(name,age){
        this.name = name
        this.age = age
    }
    greet(){
        console.log(`Hello,iam ${this.name}`)
    }
}
const person6 = new Person10("Mohan",25)
person6.greet() 

//accessing and modifying object properties
//1.access object properties using dot notation
const employee ={
    name : "mohan",
    age : 24,
    role : "developer"
}
console.log(employee.name)
console.log(employee.age)
console.log(employee.role)

//2.using bracket notation
const employee1 ={
    name : "mohan",
    age : 24,
    role : "developer"
}
console.log(employee1["name"])
console.log(employee1["age"])
console.log(employee1["role"])

//3.modify existing properties
const employee2={
    name : "mohan",
    age : 23
}
employee2.age=26
console.log(employee2)

//4.add new properties
const employee3={
    name : "mohan",
    age : 23
}
employee3.city="karimnagar"
console.log(employee3)

//5.delete properties
const employee5={
    name : "mohan",
    age : 23 ,
    city : "karimnagar"
}
delete employee5.city
console.log(employee5)


 
