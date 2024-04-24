"use strict";

var Hamburger = document.getElementById("hamburger");
var NavUl = document.querySelector("nav ul");
var NavLi = document.querySelectorAll("nav ul li");
var Cercles = document.querySelectorAll(".circle1");
var ChangementImg = document.querySelector(".img2 ");
var autreimg = document.getElementById("#suprimer");
var p = document.querySelector("#p-js");
var h5 = document.querySelector("#h5-js");
var form = document.querySelector("form");
var email = document.getElementById("mail");
var error = document.getElementById("error");
Hamburger.addEventListener("click", function () {
  console.log("p");
  NavUl.classList.toggle("NavUl");
  NavLi.forEach(function (li) {
    li.classList.add("NavLi");
  });
});
var tableauName = ["Anisha Li", "Richard Watts", "Shanai Gough", "Ali Bravo"];
var tableauTexte = [" \"ge has supercharged our team s workflow. The \n    naintain visibility on larger milestones at all times\n    keeps everyone motivated.\"", " \"Manage ailows us to provide structure and pro \n    keeps us organized and focused.I can't stop recording \n    them toeveryone i talk to! \"", "\"Their sofware allows us to track, manage and colloborate\n    on our projects from anywhere. it keeps the whole team in-\n    sync without being intrusive\"", " \"We have been able to cancel so many other subscriptions<BR>\n    since using Manahe. There is no more cross-channel<br>\n    confusion and everyone is much more focused.\""];

function apres(number) {
  ChangementImg.innerHTML = "   <img src=\"./assets/images/avatar-".concat(number, ".png\" alt=\"avatar-Ali\" id = \"surprimer\"  />");
  h5.innerHTML = "<h5>".concat(tableauName[count], " </h5>");
  p.innerHTML = "<p>".concat(tableauTexte[count], "</p>");
}

function add(nombre) {
  Cercles[nombre].classList.add("CircleStyle");
}

function remove(number) {
  setTimeout(function () {
    Cercles[number].classList.remove("CircleStyle");
  }, 2000);
}

var count = -1;
var media1 = window.matchMedia("(max-width:750px)");
var media2 = window.matchMedia("(min-width:750px)");

window.onload = function c() {
  if (media1.matches) {
    var Clear = setInterval(function () {
      if (count == 3) {
        count = -1;
      }

      count = count + 1;

      if (count == 0) {
        add(0);
        remove(0);
        apres(1);
      }

      if (count == 1) {
        add(1);
        remove(1);
        apres(2);
      }

      if (count == 2) {
        add(2);
        remove(2);
        apres(3);
      }

      if (count == 3) {
        add(3);
        remove(3);
        apres(0);
      } else if (media2.matches) {
        clearInterval(Clear);
        setTimeout(function () {
          h5.innerHTML = "<h5>".concat(tableauName[3], " </h5>");
          p.innerHTML = "<p>".concat(tableauTexte[3], "</p>");
          ChangementImg.innerHTML = "   <img src=\"./assets/images/avatar-".concat(0, ".png\" alt=\"avatar-Ali\"  />");
        }, 3000);
      }
    }, 2000);
  }
};

var obj = {};

function emailChecker(params) {
  if (!email.value.match(/^[\w_-]+@[\w-]+\.[a-z]{2,4}$/i)) {
    error.style.display = "block";
    error.textContent = " Please enter a valid email address";
  } else {
    error.textContent = "Email Valid";
    error.style.color = "green";
    setTimeout(function () {
      error.style.display = "none";
    }, 2000);
    console.log("valid");
  }
}

form.addEventListener("submit", function (e) {
  e.preventDefault();
  emailChecker();
});