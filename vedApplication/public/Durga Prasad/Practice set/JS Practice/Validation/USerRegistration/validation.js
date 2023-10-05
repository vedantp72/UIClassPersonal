let registerUser = () => {
  let userData = {};
  userData.acid = document.querySelector("#acid").value;
  userData.acid = userData.acid.trim();
  if (userData.acid === "") {
    document.querySelector(".aciderror").style.display = "block";
  } else {
    document.querySelector(".aciderror").style.display = "none";
  }
  userData.acpwd = document.querySelector("#pwd").value;
  userData.conpwd = document.querySelector("#confpwd").value;
  userData.age = document.querySelector("#age").value;
  console.log(userData);
};
let viewPassword = () => {
  let element = document.querySelector("#pwd");
  let currentType = element.getAttribute("type", "text");
  if (currentType == "text") {
    element.setAttribute("type", "password");
    document.querySelector("#eyeopen").style.display = "none";
    document.querySelector("#eyeclose").style.display = "inline";
  } else {
    element.setAttribute("type", "text");
    document.querySelector("#eyeopen").style.display = "inline";
    document.querySelector("#eyeclose").style.display = "none";
  }
};
let viewconfpwd = () => {
  let element2 = document.querySelector("#confpwd");
  let currentType = element2.getAttribute("type", "text");
  if (currentType == "text") {
    element2.setAttribute("type", "password");
    document.querySelector("#eyeopen2").style.display = "none";
    document.querySelector("#eyeclose2").style.display = "inline";
  } else {
    element2.setAttribute("type", "text");
    document.querySelector("#eyeopen2").style.display = "inline";
    document.querySelector("#eyeclose2").style.display = "none";
  }
};
var totalUpperCaseChar = 0;
var validateCharTypes = (event) => {
  if (event.keyCode >= 65 && event.keyCode <= 90) {
    totalUpperCaseChar++;
  }
  if (totalUpperCaseChar >= 2) {
    document.querySelector(".uppercaseChar").classList.remove("pwdErr");
    document.querySelector(".uppercaseChar").classList.add("pwdvalid");
  } else {
    document.querySelector(".uppercaseChar").classList.add("pwdErr");
    document.querySelector(".uppercaseChar").classList.remove("pwdvalid");
  }
  
}
var validatePwdData = (event) => {
  var pwdEntered = document.querySelector("#pwd").value;
  pwdEntered = pwdEntered.trim();
  
  // if (pwdEntered){
  //   document.querySelector(".pwdMan").style.color = "green";
  // } else {
  //   document.querySelector(".pwdMan").style.color = "red";
  // }
  if (pwdEntered) {
    document.querySelector(".pwdMan").classList.remove("pwdErr");
    document.querySelector(".pwdMan").classList.add("pwdvalid");
  } else {
    document.querySelector(".pwdMan").classList.add("pwdErr");
    document.querySelector(".pwdMan").classList.remove("pwdvalid");
  }
  if (pwdEntered.length == 8) {
    document.querySelector(".totalLength").classList.remove("pwdErr");
    document.querySelector(".totalLength").classList.add("pwdvalid");
  } else {
    document.querySelector(".totalLength").classList.add("pwdErr");
    document.querySelector(".totalLength").classList.remove("pwdvalid");
  }
  
}
var numericDataValidation = (event) => {
  console.log(event);
  if (event.keyCode >= 47 && event.keyCode <= 58) {
    return true;
  } else {
    return false;
  }
};
