// jshint esversion: 6
//hamburger
const mainMenu = document.querySelector(".mainMenu");
const closeMenu = document.querySelector(".closeMenu");
const openMenu = document.querySelector(".openMenu");

openMenu.addEventListener("click", show);
closeMenu.addEventListener("click", close);

function show() {
  mainMenu.style.display = "flex";
  mainMenu.style.top = "0";
}

function close() {
  mainMenu.style.top = "-100%";
}

//feedback
function is_checked() {
  var rdb1 = document.getElementById("rdb1").checked;
  var rdb2 = document.getElementById("rdb2").checked;
  var rdb3 = document.getElementById("rdb3").checked;
  var rdb4 = document.getElementById("rdb4").checked;
  var rdb5 = document.getElementById("rdb5").checked;
  var rdb6 = document.getElementById("rdb6").checked;
  var rdb7 = document.getElementById("rdb7").checked;
  var rdb8 = document.getElementById("rdb8").checked;
  var rdb9 = document.getElementById("rdb9").checked;
  var rdb10 = document.getElementById("rdb10").checked;
  var rdb11 = document.getElementById("rdb11").checked;
  var rdb12 = document.getElementById("rdb12").checked;
  var rdb13 = document.getElementById("rdb13").checked;
  var rdb14 = document.getElementById("rdb14").checked;
  var rdb15 = document.getElementById("rdb15").checked;
  var rdb16 = document.getElementById("rdb16").checked;
  var rdb17 = document.getElementById("rdb17").checked;
  var rdb18 = document.getElementById("rdb18").checked;
  var rdb19 = document.getElementById("rdb19").checked;
  var rdb20 = document.getElementById("rdb20").checked;
  var rdb21 = document.getElementById("rdb21").checked;
  var rdb22 = document.getElementById("rdb22").checked;
  var rdb23 = document.getElementById("rdb23").checked;
  var rdb24 = document.getElementById("rdb24").checked;
  var rdb25 = document.getElementById("rdb25").checked;
  var rdb26 = document.getElementById("rdb26").checked;

  if (rdb1 == false && rdb2 == false && rdb3 == false && rdb4 == false) {
    alert("please fill the form");
    return false;
  } else {
    return true;
  }
}
