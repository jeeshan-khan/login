const waitTimerSpan = document.querySelector("#waitTimer");
let userName = document.querySelector("#name");
let password = document.querySelector("#pass");
let submitBtn = document.querySelector("#btn");
let popUP = document.querySelector(".popUp");

let user = "jyoti";
let passKey = "1912";
let combinedLoginKey = (user + passKey).toUpperCase();
let page;
submitBtn.addEventListener("click", () => {
  let userValue = userName.value;
  let passValue = password.value;
  // userName = userName.toUpperCase();
  // password = password.toUpperCase();
  if(userName.value =="" ){
   userName.style.animation =  " vibrate  0.5s alternate";
   password.style.animation =  " vibrate  0.5s alternate";
   setTimeout(() => {
    userName.style.animation =  "none";
    password.style.animation =  "none";
     
   }, 600); 
   return;
  }
  if (userName.value.toUpperCase() + password.value.toUpperCase() === combinedLoginKey) {
    popUP.style.display = "flex";
    popUP.style.transform = "translate(-50%,-50%)scale(1)";
    // popUP.style.transition = "all ease 1s";
    waitTimer();
  }else{
    wrongPassword();
  }
});

let waitTimer = () => {
  let i = 4;

  const countdownInterval = setInterval(() => {
    if (i >= 0) {
      waitTimerSpan.innerHTML = i;
      if (i === 0) {
        page = window.open("https://jeeshan-khan.github.io/khushi/", "_blank","popup = ture");
      }
    }

    i--;

    if (i < 0) {
      clearInterval(countdownInterval);
      closeBtnArrive();
    }
  }, 1000);
};

let closeBtnArrive = () => {
  setTimeout(() => {
    let paraCloseBtn = waitTimerSpan.parentElement;
    paraCloseBtn.innerHTML = "Close";
    paraCloseBtn.style.border = "2px solid white";
    paraCloseBtn.style.padding = "5px 20px";
    paraCloseBtn.style.cursor = "pointer";
    paraCloseBtn.addEventListener("click", () => {
      if (paraCloseBtn.innerHTML == "Close") {
        closeCurrentWindow();
      }
    });
  }, 2000);
};

let closeCurrentWindow = () => {
  window.close();
};

let massegePopUp = document.querySelector(".massegePopUp")
let wrongPassword=()=>{
  massegePopUp.style.top= "20px";
  setTimeout(() => {
    massegePopUp.style.top= "-50%";    
  }, 2000);
}