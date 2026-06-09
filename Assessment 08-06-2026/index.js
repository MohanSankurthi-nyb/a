function findSecondLargest (arr){
    let sorted=[...arr].sort((a,b)=>b-a)
    return sorted[1]
    let numbers=[12,45,67,89,34,78]
    console.log("secondlargestnumber",findSecondLargest(numbers))
}

function reverseString(str){
    let reversed =" ";
    for(let i=str.length -1;i>=0;i--){
        reversed=reversed+str[i]
    }
    return reversed
}
let result=reverseString("javascript")
console.log(result)



function duplicateElements(arr){
 for(let i=0;i<arr.length;i++){
    for(let j=i+1;j<arr.length;j++){
        if(arr[i]===arr[j]){
            console.log("duplicate elements",arr[i])
            break
        }
    }
 }
}
let numbers=[1,2,3,4,2,5,3,6]
duplicateElements(numbers)

let str=prompt("enter a string")
let vowels=0
let consonants=0
for(let i=0;i<str.length;i++){
    let ch=str[i].toLowerCase()
    if(
        ch==="a"||
        ch==="e"||
        ch==="i"||
        ch==="o"||
        ch==="u"
    ) {
        vowels++
    }else if(ch>='a' && ch<='z'){
        consonants++
    }
}
console.log("vowels",vowels)
console.log("consonants",consonants)
