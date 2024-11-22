"use strict";
let myDiv = document.querySelector(".list");
let btn = document.querySelector(".btn");
let ul = document.createElement("ul");
myDiv.append(ul);

btn.addEventListener("click", () => {
  let li = document.createElement("li");
  li.innerHTML = prompt("متن خود را وارد کنید");
  let where = prompt("(فقط 'قبل' یا 'بعد' بگید)مکانش کجا باشه؟");
  let flag = false
  if (where == "بعد") {
    ul.append(li)
    flag = true
  } else if (where == "قبل") {
    ul.prepend(li)
    flag = true
  }else{
    flag = false
  }
  if (flag == true) {
   alert("success")
  } else {
    alert("not found 404");
  }
});
