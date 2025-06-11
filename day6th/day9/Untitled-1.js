//arrays methods -> pop,push,shift,splice,reverse,sort
arrs=[1, 3, 2, 4, 5, 6, 7, 9, 8, 10]
console.log(arrs);
//pop -> it removes last elements
arrs.pop()
console.log(arrs);
//push _> it add element at last
arrs.pop(11)
console.log(arrs);
//shift -> remove element from start
arrs.shift(12)
console.log(arrs);
//unshift -> add element from start
arrs.unshift(12)
console.log(arrs);
//sort -> shorting order
arrs.sort()
console.log(arrs);
//reverse -> element reverse
arrs.reverse()
console.log(arrs);
//splice -> (particular remove, multiple values)
console.log(arrs);
arrs.splice(0 , 6 , 0 , 1 , 2)
console.log(arrs);

//Arrays Iteration -> for, for of , foreach ,map , filter , reduce
//1. Using for loop -> condition -> indexing bata print  garaxau
for(let i= 0; i< arrs.length; i++){
  console.log(arrs[i]);
}
//wap using for loop to print the sum of arrays
// a = [10,20,30,40,50] = 150 h/w
//wap to reverse string"hello"="olleh"
//wap to check if the given string is palindriome or not
//wap to check if the given number is odd or even
//wap to swap 2 values a=20 , b=30
//wap using array function to print the given number is odd or even
//wap to print the vowel from the a="hwllo sir"

//for in
for(i in arrs){
  console.log(arrs[i]);
}
//for each -> call back function
arrs.forEach((items)=>{
  console.log(items);
})
//map
let abc = arrs.map((items,index)=> items)
   console.log(abc);
//filter
let even=arrs.filter((items)=>{
if(items %2 ==0) {
  return items
}
})
console.log(even);
//reduce
abcd=[10,20,30,40,50]
let red= abcd.reduce((acc, items)=> acc+items, 0 )
console.log(red);
//object in js-> keys and values
let sb = {
  "name": "junu",
  "age" : 23,
  "gender" : "female",
  12:1
}
console.log(sb.name);
console.log(sb.age);
console.log(sb.gender);

//set->unique collection of value
let st = new Set()
//add
st.add(1)
st.add(2)
console.log(st);