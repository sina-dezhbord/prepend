'use strict'
let myDiv=document.querySelector(".list")
let btn = document.querySelector(".btn")
let ul = document.createElement("ul")
myDiv.append(ul)

btn.addEventListener("click", ()=>{
    let li=document.createElement("li")
    li.innerHTML=prompt("chi")
    let where=prompt("where?(prepend=ghabl or append=baad)")
    if(where in li){
        ul[where](li)
    }else{
        alert("not found 404")
    }
})

