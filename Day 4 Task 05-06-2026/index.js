//operators
//arithmetic operators (+ - / ++ -- *)
var a=10
var b=20
console.log(a/b) //quotient 
console.log(a%b) //remainder

//increment operator -> Pre increment and Post increment
console.log(a) //10
console.log("pre incriment is : ",++a)//11
console.log('post increment is ' , a++)//11
console.log(`final a value is`,a)//12

//decrement operator -> post and pre decrement
console.log(b) //20
console.log("pre decrement is : ",--b)//19
console.log('post decrement is ' , b--)//19
console.log(`final b value is`,b)//18

var A=2
var B=3
console.log(A*B)
console.log(A**B)

//assignment operator (=)
// += -= -> shorthand operators *= /= %=
var A=2
var B=3
console.log(B)
B+=A //B=B+A
console.log(B)

//comparison operator -> used to compare two values
// result will be boolean value
//< > <= >=
//  == loose equality (value)
//  === stricy equality (value and its datatype )
// != loose inequality
// !==  stricy inequality 
var a = 10
var b =8 
var c =10
console.log(a<b)
console.log(a>b)
console.log(a<c)
console.log(a>=c)
var d=10
var e="10"
console.log(`loose inequality`,d!=e)
console.log(`loose equality`,d==e)
console.log(`stricy inequality`,d!==e)
console.log(`stricy equality`,d===e)

//voting after 18
let age=10
console.log(age>18)

console.log(`javascript program using different operators`)
//arithmetic operators
var a = 10
var b = 5
console.log("addition:",a+b)  
console.log("subtraction:",a-b) 
console.log("multiplication:",a/b) 
console.log("divisin;" ,a/b) 
console.log("modulus:",a % b)
//assignment operator
let x=10
x+=5
console.log(`assignment +=:`,x)
//logical operator
let login=true
let logout=false
console.log('AND (&&):',login && logout)
console.log('OR (||):',login || logout)
console.log('ONT (!):',!logout)
//ternary operator
let age1=20
let result=age >=18?"eligible to vote" : "not eligible to vote"
console.log(result)
//increment & decrement operator
let count=5
count++
console.log("increment :",count)
count--
console.log("decrement :",count)
//typeof operator
let name1="Navya"
console.log("type of name",typeof name1)
console.log("type of age",typeof age1)

//operator precedence
//it is set of rules that determines which operator is executed first when an expression contains multiple operators
//Js evaluates operators with higher  precedence before lower
let results=10+5*2
console.log(results)
//op is 20 ( * has higher precendence than +) 5*2=10, 10+10=20

//execution flow
// () => ++,-- => *,/,% => +,- => <,>,<=,>= => ==,===,!=,!== => && => || => =,+=,-=

//logical operator
//AND (&&)-> if both conditions are true then result also will be true
//OR (||) -> if any of the condition is true then result will be true
//NOT (!) ->

console.log((2<4) && (2>4 ))
console.log((2<4) && (8>4 ))
console.log((2<4) || (2>4 ))
console.log(!(2<4))

//Ternary ->  condition ?  true :  false
var salary = 4000
salary > 10000 ? console.log("you can apply") : console.log("you can't apply")
var salary = 4000
salary >= 4000 ? console.log("you can apply") : console.log("you can't apply")

//string
var first="mohan"
var last="patel"
console.log(first+" "+last)

//template literal 
console.log(`my name is ${first} ${last} and i am working as CEO at origin `)

//realtime opeartor practice
//employee salary calculation
let basicSalary=30000
let bonus=5000
let tax=2000
let netSalary = basicSalary + bonus - tax
console.log(netSalary) //33000

//Login validation
let username = "admin"
let password= "12345"
let Valid= username === "admin" && password ==="12345"
console.log(Valid)

//template literal in JS
var name="basha"
var ageof= 25
var message = `My name is ${name} and Iam ${ageof} years old`
console.log(message)

//bitwise operator
var a=5
var b=7
console.log("bitwise & is :",a&b)

var a=5
var b=7
console.log("bitwise | is :",a|b)

var a=5
var b=7
console.log("bitwise ^ is :",a^b)

var a=6
console.log('bitwise ~ is',~a)

var a=6
console.log('bitwise << is',a<<1)

var a=6
console.log('bitwise >> is',a>>1)

//realtime example
var num=8
if((num & 1)===0){
    console.log("even")
} else {
    console.log("odd")
}




//string formatting examples
let product = `mobile`
let price = 15000
let quantity = 2
let rupee ="\u20B9"
let bill =  `you purchased ${quantity} ${product}(s) for ${rupee} ${price * quantity}`
console.log(bill)

//embedding variables inside template literals
var name="asha"
console.log(`welcome ${name}`)

var a=38
var b=9876
console.log(`the sum of ${a} and ${b} is ${a + b}`)

var student="Mouli"
var marks=450
var total=600
console.log(`${student} scored ${marks}/${total}`)

var ages=20
console.log(`you are ${ages>18 ? "an adult" : " a minor"}`)

//conditional statements
// 1.if
//2.if else
    //3.else if else
    //4.switch
//ternary ? :

//if()

function chechEligibility(){
if (Age>20){
    console.log("eligible to vote")
}
}
let Age=23
chechEligibility(Age)
if(true){
    console.log("truthy value")
}

//if else
var a=20
if(a>0 && a%2==0){
    console.log("positive and even number")
}
else {
    console.log("negative number")
}
  

var marks=55
if(marks>90){
   console.log("A grade")
}else if(marks>80){
       console.log("B grade")
}else if(marks>70){
       console.log("c grade")
}
else{
    console.log("fail")
}

//switch
function grades(g){
switch(g){
    case 10:
        console.log("Excellent")
        break
        case 9:
            console.log("good")
            break
            case 8:
                console.log("average")
                break
                default:
                    console.log("poor")
}
}
var gradeA = 7
grades(gradeA)
var gradeB = 8
grades(gradeB)


 console.log(true && false ||  true )

 let name2="mohan"
 if(name2){
    console.log("truthy")
 }

