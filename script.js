// script.js

// ================= SCROLL TOP =================

const scrollTopBtn = document.getElementById("scrollTop");

window.addEventListener("scroll", () => {

  if(window.scrollY > 300){
    scrollTopBtn.style.display = "block";
  }

  else{
    scrollTopBtn.style.display = "none";
  }

});

scrollTopBtn.addEventListener("click", () => {

  window.scrollTo({
    top:0,
    behavior:"smooth"
  });

});

// ================= DARK MODE =================

const toggle = document.getElementById("theme-toggle");

toggle.addEventListener("click", () => {

  document.body.classList.toggle("dark");

  if(document.body.classList.contains("dark")){
    toggle.textContent = "☀️";
  }

  else{
    toggle.textContent = "🌙";
  }

});

// ================= MOBILE MENU =================

const menuToggle = document.getElementById("menu-toggle");

const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {

  navLinks.classList.toggle("active");

});

// ================= SCROLL REVEAL =================

const observer = new IntersectionObserver((entries)=>{

  entries.forEach((entry)=>{

    if(entry.isIntersecting){

      entry.target.classList.add("show");

    }

  });

});

const hiddenElements = document.querySelectorAll(".hidden");

hiddenElements.forEach((el)=>{

  observer.observe(el);

});

// ================= TYPING EFFECT =================

const text = "Web Developer & Data Analytics Enthusiast";

const typingText = document.querySelector(".typing-text");

let index = 0;

function typeEffect(){

  if(index < text.length){

    typingText.textContent += text.charAt(index);

    index++;

    setTimeout(typeEffect,80);

  }

}

typeEffect();
