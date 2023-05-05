let pass = document.querySelector("#pass");
let conPass = document.querySelector("#conPass");
let passMatch = document.querySelector(".passMatch");
let form = document.querySelector("form");
let btn = document.querySelector(".btnSubmit");
passMatch.style.display = "none";
let passValue;
let conPassValue;

pass.onchange = e => {
  passValue = e.target.value;
  console.log(passValue);
}

conPass.onchange = e => {
  conPassValue = e.target.value;
  console.log(conPassValue);
}

function passCheck (e) {
  if ((passValue != "" & conPassValue != "") & passValue != conPassValue) {
    passMatch.style.display = "flex";
    form.setAttribute("onsubmit", "return false");
  } else {
    form.removeAttribute("onsubmit", "return false");
  }
}

btn.onclick = e => passCheck(e);

