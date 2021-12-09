var email = document.getElementById("email");
    var checkEmail = document.getElementById("check-email");
    var password = document.getElementById("password");
    var checkPassword = document.getElementById("check-password");
    var checkUser = document.getElementById("check-user");
    var user = document.getElementById("user");
    var date = document.getElementById("date");
    var checkDate = document.getElementById("check-date");
    var submit = document.getElementById("submit");


email.onfocus = function() {
  checkEmail.style.display = "block";
}


email.onblur = function() {
  checkEmail.style.display = "none";
}

email.onkeyup = function() {


  var emailValidation = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if(email.value.match(emailValidation)) {
    checkEmail.classList.remove("invalid");
    checkEmail.classList.add("valid");
  } else {
    checkEmail.classList.remove("valid");
    checkEmail.classList.add("invalid");
  }

}

password.onfocus = function() {
  checkPassword.style.display = "block";
}

password.onblur = function() {
  checkPassword.style.display = "none";
}

password.onkeyup = function() {
  if (password.value.length >= 6 && password.value.length <= 20) {
    checkPassword.classList.remove("invalid");
    checkPassword.classList.add("valid");
  } else {
    checkPassword.classList.remove("valid");
    checkPassword.classList.add("invalid");
  }

}

user.onfocus = function() {
  checkUser.style.display = "block";
}

user.onblur = function() {
  checkUser.style.display = "none";
}

user.onkeyup = function() {
  if (user.value.length >= 6 && user.value.length <= 20) {
    checkUser.classList.remove("invalid");
    checkUser.classList.add("valid");
  } else {
    checkUser.classList.remove("valid");
    checkUser.classList.add("invalid");
  }

}

date.onfocus = function() {
checkDate.style.display = "block";
}
date.onblur = function() {
  checkDate.style.display = "none";
}

date.onchange = function() {
  if (date.onchange) {
    checkDate.classList.remove("invalid");
    checkDate.classList.add("valid");
  } else {
    checkDate.classList.remove("valid");
    checkDate.classList.add("invalid");
  }

}