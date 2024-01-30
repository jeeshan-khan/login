let userName=document.querySelector("#name");
let password=document.querySelector("#pass");
let submitBtn=document.querySelector("#btn");

let user = "admin";
let passKey = "1234";

submitBtn.addEventListener("click",()=>{
    let userValue = userName.value;
    let passValue = password.value;
    console.log(passValue);
})