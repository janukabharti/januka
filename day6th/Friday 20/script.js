// DOM -> Document Object Model -> how we can access and modify html page
// DOM / BOM-> 
// Bom -> Browser Object Model -> alert() , prompt() , confirm()

// Nodes -> 
// 1. Element -> h1, h2, p, div, section
// 2. Text -> Text
// 3. Comment -> <!-- this is a comment  node  -->
// 4. Attribute -> ahref, src, class, id

// Html Structure -> 
// 1. Head
// 2. Body
// https://www.w3schools.com/js/pic_htmltree.gif

// DOM -> 
// 1. Access the element 
// -> to access the element we have 5 selectors -> 
//              getElementById(), 
//              getElementsByTagName(), -> arrays
//              getElementsByClassName(), -> arrays
//              querySelector(), 
//              querySelectorAll()-> arrays
document.getElementById("h1").textContent = "hello form js h1"
document.getElementsByClassName("h2")[0].textContent ="hello from h2"
document.getElementsByTagName("h3")[0].textContent ="hello from h3"
document.querySelector("h4").textContent ="hello from h4"
document.querySelectorAll("h5")[0].textContent ="hello from h5"



// 2. how to create the element _. createElement , appendChild
ol = document.getElementById("ol")
li = document.createElement("li")
li.textContent = "hello from li"
ol.appendChild(li)
ol = document.getElementById("ol")
li = document.createElement("li")
li.textContent = "hello from li 2"
// removeChild
removeChild(li)
ol.appendChild(li)

// 3. Remove the element -> remove
// removeChild -> li 
// ol.remove()
// ol.appendChild(li)

// 4. how to add css properties
let h1 = document.getElementById("h1")
h1.style.color = "red"
h1.style.backgroundColor = "black"