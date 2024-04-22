const NavUl = document.querySelector("nav ul");

const NavLi = document.querySelectorAll("nav ul li");
const Hamburger = document.getElementById("hamburger");
const Cercles = document.querySelectorAll(".circle1");
const ChangementImg = document.querySelector(".img2 ");
const autreimg = document.getElementById("#suprimer");
const p = document.querySelector("#p-js");
const h5 = document.querySelector("#h5-js");
const form = document.querySelector("form");
const email = document.getElementById("mail");
const error = document.getElementById("error");

Hamburger.addEventListener("click", () => {
  console.log("p");
  NavUl.classList.toggle("NavUl");
  NavLi.forEach((li) => {
    li.classList.add("NavLi");
  });
});
// h5.innerHTML = `<h5>${tableauName[nombre]}</h5>`;
let tableauName = ["Anisha Li", "Richard Watts", "Shanai Gough", "Ali Bravo"];
let tableauTexte = [
  ` "ge has supercharged our team s workflow. The 
    naintain visibility on larger milestones at all times
    keeps everyone motivated."`,
  ` "Manage ailows us to provide structure and pro 
    keeps us organized and focused.I can't stop recording 
    them toeveryone i talk to! "`,

  `"Their sofware allows us to track, manage and colloborate
    on our projects from anywhere. it keeps the whole team in-
    sync without being intrusive"`,
  ` "We have been able to cancel so many other subscriptions<BR>
    since using Manahe. There is no more cross-channel<br>
    confusion and everyone is much more focused."`,
];

function apres(number) {
  ChangementImg.innerHTML = `   <img src="./assets/images/avatar-${number}.png" alt="avatar-Ali" id = "surprimer"  />`;
  h5.innerHTML = `<h5>${tableauName[count]} </h5>`;
  p.innerHTML = `<p>${tableauTexte[count]}</p>`;
}
function add(nombre) {
  Cercles[nombre].classList.add("CircleStyle");
}

function remove(number) {
  setTimeout(() => {
    Cercles[number].classList.remove("CircleStyle");
  }, 2000);
}
let count = -1;

const media1 = window.matchMedia("(max-width:750px)");
const media2 = window.matchMedia("(min-width:750px)");
window.onload = function c() {
  if (media1.matches) {
    let Clear = setInterval(() => {
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
        setTimeout(() => {
          autreimg.style.display = "none";
          h5.innerHTML = `<h5>${tableauName[3]} </h5>`;
          p.innerHTML = `<p>${tableauTexte[3]}</p>`;
          ChangementImg.innerHTML = `   <img src="./assets/images/avatar-${0}.png" alt="avatar-Ali"  />`;
        }, 3000);
      }
    }, 2000);
  }
};

let obj = {};
// function EmailChecker(params) {
//   email.addEventListener("input", () => {
//     if (!email.value.match(/^[\w_-]+@[\w-]+\.[a-z]{2,4}$/i)) {
//       console.log("v");
//     } else {
//       obj.email = email.value;
//     }
//   });
// }
function emailChecker(params) {
  if (!email.value.match(/^[\w_-]+@[\w-]+\.[a-z]{2,4}$/i)) {
    error.style.display = "block";
    error.textContent = " Please enter a valid email address";
    console.log("non");
  } else {
    error.style.display = "none";
    console.log("valid");
  }
}
email.addEventListener("input", (e) => {
  if (e.target.id == "mail") {
  }
});
form.addEventListener("submit", (e) => {
  emailChecker();
  e.preventDefault();
});
