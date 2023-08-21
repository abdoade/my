let he=document.getElementById("div_he")
let h2=document.createElement("h1")
h2.innerText="hellow"+"   "+window.localStorage.getItem("User name")
he.appendChild(h2)

let h_4=document.getElementById("h_4")
let h3=document.getElementById("h_3")

let h_2=document.getElementById("h_2")
let h_5=document.getElementById("h_5")


h3.innerText="user name is:"+"  "+window.localStorage.getItem("User name")
h_4.innerText="password is:"+"  "+window.localStorage.getItem("password")
h_2.innerText="your age:"+"  "+window.localStorage.getItem("age")
h_5.innerText="your email is:"+" "+window.localStorage.getItem("Email")
