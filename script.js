const waitTimerSpan = document.querySelector("#waitTimer");
let userName = document.querySelector("#name");
let password = document.querySelector("#pass");
let submitBtn = document.querySelector("#btn");
let popUP = document.querySelector(".popUp");

let user = "gayatri-sahoo";
let passKey = "2302";
let combinedLoginKey = (user + passKey).toUpperCase();
let page;
submitBtn.addEventListener("click", () => {
  let userValue = userName.value;
  let passValue = password.value;
  userValue = userValue.toUpperCase();
  passValue = passValue.toUpperCase();

  if (userValue + passValue === combinedLoginKey) {
    popUP.style.display = "flex";
    popUP.style.transform = "translate(-50%,-50%)scale(1)";
    // popUP.style.transition = "all ease 1s";
    waitTimer();
  }
});

let waitTimer = () => {
  let i = 4;

  const countdownInterval = setInterval(() => {
    if (i >= 0) {
      waitTimerSpan.innerHTML = i;
      if (i === 0) {
        page = window.open("https://jeeshan-khan.github.io/khushi/", "_blank");
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
