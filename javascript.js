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
//for form
let nameError = document.getElementById("name-error");
let phoneError = document.getElementById("phone-error");
let emailError = document.getElementById("email-error");
let dateinError = document.getElementById("datein-error");
let date_hostelError = document.getElementById("dateHostel-error");
let date_motelError = document.getElementById("datemotel-error");
let date_houseError = document.getElementById("datehouse-error");
let peopleError = document.getElementById("people-error");
let messageError = document.getElementById("message-error");
let people_hostelError = document.getElementById("peopleHostel-error");
let people_motelError = document.getElementById("peoplemotel-error");
let people_houseError = document.getElementById("peoplehouse-error");
let submitError = document.getElementById("submit-error");
const form = document.querySelector("form");

let isFormValid = true;
function validateName() {
  let name = document.getElementById("contact-name").value;
  if (name.length == 0) {
    nameError.innerHTML = "name is required";
    return false;
  }

  if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
    nameError.innerHTML = "write full name";
    return false;
  }
  nameError.innerHTML = "";
  return true;
}

function validatePhone() {
  let phone = document.getElementById("contact-phone").value;
  if (phone.length == 0) {
    phoneError.innerHTML = "phone is required";
    return false;
  } else if (phone.length !== 10) {
    phoneError.innerHTML = "phone no should be 10 digits";
    return false;
  } else if (!phone.match(/^[0-9]{10}$/)) {
    phoneError.innerHTML = "only digits";
    return false;
  } else {
    phoneError.innerHTML = "";
    return true;
  }
}

function validateEmail() {
  let email = document.getElementById("contact-email").value;
  if (email.length == 0) {
    emailError.innerHTML = "email is required";
    return false;
  }

  if (!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
    emailError.innerHTML = "email is invalid";
    return false;
  }

  emailError.innerHTML = "";
  return true;
}
function validateDateIn() {
  let datein = document.getElementById("fromdate").value;
  if (datein.length == 0) {
    dateinError.style.display = "block";
    dateinError.innerHTML = "Please Enter Valid Date";
    setTimeout(function () {
      dateinError.style.display = "none";
    }, 5000);
    return false;
  }

  dateinError.innerHTML = "";
  return true;
}
function validateDateHostel() {
  let date_hostel = document.getElementById("fromdate_hostel").value;
  if (date_hostel.length == 0) {
    date_hostelError.style.display = "block";
    date_hostelError.innerHTML = "Please Enter Valid Date";
    setTimeout(function () {
      date_hostelError.style.display = "none";
    }, 5000);
    return false;
  }

  date_hostelError.innerHTML = "";
  return true;
}
function validateDateMotel() {
  let date_motel = document.getElementById("fromdate_motel").value;
  if (date_motel.length == 0) {
    date_motelError.style.display = "block";
    date_motelError.innerHTML = "Please Enter Valid Date";
    setTimeout(function () {
      date_motelError.style.display = "none";
    }, 5000);
    return false;
  }

  date_motelError.innerHTML = "";
  return true;
}
function validateDateHouse() {
  let date_house = document.getElementById("fromdate_house").value;
  if (date_house.length == 0) {
    date_houseError.style.display = "block";
    date_houseError.innerHTML = "Please Enter Valid Date";
    setTimeout(function () {
      date_houseError.style.display = "none";
    }, 5000);
    return false;
  }

  date_houseError.innerHTML = "";
  return true;
}
function validatePeople() {
  let people = document.getElementById("contact-people").value;
  if (people.length == 0) {
    peopleError.innerHTML = "No of people is required";
    return false;
  }

  peopleError.innerHTML = "";
  return true;
}
function validatePeopleHostel() {
  let people_hostel = document.getElementById("peopleInHostel").value;
  if (people_hostel.length == 0) {
    people_hostelError.innerHTML = "No of people is required";
    return false;
  }

  people_hostelError.innerHTML = "";
  return true;
}
function validatePeopleMotel() {
  let people_motel = document.getElementById("peopleInmotel").value;
  if (people_motel.length == 0) {
    people_motelError.innerHTML = "No of people is required";
    return false;
  }

  people_motelError.innerHTML = "";
  return true;
}
function validatePeopleHouse() {
  let people_house = document.getElementById("peopleInhouse").value;
  if (people_house.length == 0) {
    people_houseError.innerHTML = "No of people is required";
    return false;
  }

  people_houseError.innerHTML = "";
  return true;
}
function validateMessage() {
  let message = document.getElementById("contact-message").value;
  if (message.length == 0) {
    messageError.innerHTML = "message is required";
    return false;
  }

  messageError.innerHTML = '<i class="fas fa-check-circle"></i>';
  return true;
}
/*exported validateForm*/
function validateForm() {
  if (
    !validateName() ||
    !validatePhone() ||
    !validateEmail() ||
    !validateDateIn() ||
    !validatePeople() ||
    !validateDateHostel() ||
    !validatePeopleHostel() ||
    !validateDateMotel() ||
    !validatePeopleMotel() ||
    !validateDateHouse() ||
    !validatePeopleHouse() ||
    !validateMessage()
  ) {
    submitError.style.display = "block";
    submitError.innerHTML = "please fix the error";
    setTimeout(function () {
      submitError.style.display = "none";
    }, 3000);
    return false;
  }
}

form.addEventListener("submit", function (e) {
  e.preventDefault();
  if (isFormValid) {
    form.submit();
  }
});
//for popup
/*exported toggle*/
function toggle(el) {
  let tag = document.getElementById(el);
  tag.style.display = tag.style.display === "block" ? "none" : "block";
}

//popup starts
const modal = document.querySelector("#my-modal");
const modal1 = document.querySelector("#my-modal1");
const modal2 = document.querySelector("#my-modal2");
const modal3 = document.querySelector("#my-modal3");
const modal_map = document.querySelector("#my-map");
const modalBtn = document.querySelector("#modal-btn");
const modalBtn1 = document.querySelector("#modal-btn1");
const modalBtn2 = document.querySelector("#modal-btn2");
const modalBtn3 = document.querySelector("#modal-btn3");
const map_box = document.querySelector("#map-box");
const closeBtn = document.querySelector(".close");
const closeBtn1 = document.querySelector(".close1");
const closeBtn2 = document.querySelector(".close2");
const closeBtn3 = document.querySelector(".close3");
const closemap = document.querySelector(".close_map");

// Events
modalBtn.addEventListener("click", openModal);
modalBtn1.addEventListener("click", openModal1);
modalBtn2.addEventListener("click", openModal2);
modalBtn3.addEventListener("click", openModal3);
map_box.addEventListener("click", open_map);
closeBtn.addEventListener("click", closeModal);
closeBtn1.addEventListener("click", closeModal1);
closeBtn2.addEventListener("click", closeModal2);
closeBtn3.addEventListener("click", closeModal3);
closemap.addEventListener("click", closeModalmap);

function openModal() {
  modal.style.display = "block";
}
function openModal1() {
  modal1.style.display = "block";
}
function openModal2() {
  modal2.style.display = "block";
}
function openModal3() {
  modal3.style.display = "block";
}
function open_map() {
  modal_map.style.display = "block";
}

function closeModal() {
  modal.style.display = "none";
}
function closeModal1() {
  modal1.style.display = "none";
}
function closeModal2() {
  modal2.style.display = "none";
}
function closeModal3() {
  modal3.style.display = "none";
}
function closeModalmap() {
  modal_map.style.display = "none";
}

//maps
mapboxgl.accessToken =
  "pk.eyJ1Ijoic3Vwcml5YXMiLCJhIjoiY2xhcDVrbGQ5MDBidjNubnl0cG5icnk1diJ9.2Dv2Vbdre0qdKaWxnddeIQ";

navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
  enableHighAccuracy: true,
});

function successLocation(position) {
  setupMap([174.7677, -36.850109]);
}
function errorLocation() {
  setupMap([174.7677, -36.850109]);
}

function setupMap(center) {
  const map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/streets-v11",
    center: center,
    zoom: 15,
  });

  const nav = new mapboxgl.NavigationControl();
  map.addControl(nav);

  const directions = new MapboxDirections({
    accessToken: mapboxgl.accessToken,
  });
  map.addControl(directions, "top-left");
}
