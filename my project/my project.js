let sub=document.getElementsByClassName("sub")
link=document.getElementById("a-1")
inpt1=document.getElementsByClassName("inpt1")[0]
int2=document.getElementById("int2")
// window.localStorage.setItem("paaword")
age=document.getElementById("age")
email=document.getElementById("email")

link.onclick=function(){
    if(isNaN(inpt1.value)&& isFinite(int2.value) && (age.value>15)){
   
        window.localStorage["User name"]=inpt1.value
        window.localStorage["password"]=int2.value
        window.localStorage["age"]=age.value
        window.localStorage["Email"]=email.value

        window.open("http://127.0.0.1:5500/my%20project/my%20product.html");
    }
    else{
        alert("invalid username or password or age");
    };
}
console.log( window.localStorage.getItem("User name"))
