let contactIcon = document.querySelector(".contact-mini");
contactIcon.addEventListener("mouseover", (e) => {
   document.querySelector(".contact-github").src = "../assets/img/github-black.svg";
});
contactIcon.addEventListener("mouseleave", (e) => {
   document.querySelector(".contact-github").src = "../assets/img/github-white.svg";
});
