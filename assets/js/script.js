'use strict';



/**
 * navbar toggle
 */

const header = document.querySelector("[data-header]");
const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");

navToggleBtn.addEventListener("click", function () {
  header.classList.toggle("nav-active");
  this.classList.toggle("active");
});

/**
 * toggle the navbar when click any navbar link
 */

const navbarLinks = document.querySelectorAll("[data-nav-link]");

for (let i = 0; i < navbarLinks.length; i++) {
  navbarLinks[i].addEventListener("click", function () {
    header.classList.toggle("nav-active");
    navToggleBtn.classList.toggle("active");
  });
}





/**
 * back to top & header
 */

const backTopBtn = document.querySelector("[data-back-to-top]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});
















document.addEventListener("DOMContentLoaded", () => {
  const cubeContainer = document.querySelector('.cube-container');
  const particlesContainer = document.querySelector('.particles');
  const hoverArea = document.querySelector('.hover-area');

  document.addEventListener('mousemove', (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 0.3;
    const y = (e.clientY / window.innerHeight - 0.5) * 0.3;
    const rotateX = y * 10;
    const rotateY = x * 15;
    cubeContainer.style.transform = `rotateX(${-rotateX}deg) rotateY(${rotateY}deg)`;
  });

  function createParticle() {
    const particle = document.createElement('div');
    particle.className = 'particle';
    const x = Math.random() * 100;
    const y = Math.random() * 100;
    particle.style.left = `${x}%`;
    particle.style.top = `${y}%`;
    particlesContainer.appendChild(particle);
    setTimeout(() => {
      particle.remove();
    }, 12000);
  }

  setInterval(createParticle, 200);

  let hoverInterval;
  hoverArea.addEventListener('mouseenter', () => {
    hoverInterval = setInterval(createParticle, 100);
  });
  hoverArea.addEventListener('mouseleave', () => {
    clearInterval(hoverInterval);
  });
});
