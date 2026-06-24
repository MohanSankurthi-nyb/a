//exports -> 2 ways

//1.default export
//Used when a file has one main value/function/class to export
//only one default export per file
//No {} while importing
//can use any name during import 

//2.named export
//Used when exporting multiple values from a file
//Multiple exports allowed
//import using {}
//names must match exactly
 

//named export
export function add(a,b){
    return a+b
}
export function subtract(a,b){
    return a-b
}

//default export
export default function greet(name){
    return `Hello ${name}`
}

