import { name, gender, person} from "./export.js"

console.log(name, gender);

person()
// synchronous -> code will run line by line
// asynchronous -> code will run at the same line

// 2. Asynchronous ->
//1. Callback -> it can be called multiple times(once) = callback hell

// eg Settimeout
setTimeout(()=>{
    console.log("Iam a person from settimeout")
})

//2. Promise -> we can call promise multiple times
// 1. Pending -> request is pending
//2. resolve -> request is resolve
//3. rejected -> request is rejected

// eg ->

let promise = new Promise((resolve, reject)=>{
setTimeout(())=>{
    resolve("I am a person fromm promise to print after 2 seconds")
}, 2000)
})

promise.then((data)=>{
console.log(data)
})

console.log("bye");

// Promises -> Async and wait
let url ="https://fakestoreapi.com/products"

let data = async()=>{
    let res  = await fetch(url)
    let data = await res.json()
    console.log(data)
}

data()