/* =========== Show Navbar =========== */
const navbar = document.querySelector(".navbar");
const hamburger = document.querySelector(".hamburger");

hamburger.addEventListener("click", () => {
  navbar.classList.toggle("show");
});

/* =========== Scroll Position =========== */

const header = document.querySelector(".header");
const scrollLink = document.querySelectorAll(".navbar a:not(:last-child)");

/* =========== Smooth Scroll =========== */
Array.from(scrollLink).map((link) => {
  link.addEventListener("click", (e) => {
    // Prevent Default
    e.preventDefault();

    const id = e.currentTarget.getAttribute("href").slice(1);
    const element = document.getElementById(id);
    let position = element.offsetTop - 90;

    window.scrollTo({
      left: 0,
      top: position,
      behavior: "smooth",
    });
    navbar.classList.remove("show");
  });
});

/* =========== Preloader =========== */
const preloader = document.querySelector(".preloader");

window.addEventListener("load", () => {
  setTimeout(() => {
    preloader.style.display = "none";
  }, 2000);
});

/* =========== Scroll Top =========== */
const scrollTop = document.querySelector(".scroll-top");

scrollTop.addEventListener("click", () => {
  window.scrollTo({
    left: 0,
    top: 0,
    behavior: "smooth",
  });
});

window.addEventListener("scroll", (e) => {
  const scrollHeight = window.pageYOffset;

  if (scrollHeight > 300) {
    scrollTop.classList.add("show");
  } else {
    scrollTop.classList.remove("show");
  }
});

/* =========== Scroll Reveal =========== */
const scroll = ScrollReveal({
  distance: "100px",
  duration: 2500,
  reset: true,
});

scroll.reveal(`.home .content h1, .home .content p,.home .content .home-btn`, {
  origin: "top",
  interval: 100,
});

scroll.reveal(`.home .image`, {
  origin: "right",
});

scroll.reveal(`.services .top h2, .services .top p`, {
  origin: "top",
  interval: 100,
});

scroll.reveal(`.services .bottom`, {
  origin: "bottom",
});

scroll.reveal(`.about .content h3, .about .content p,.about .content .btn`, {
  origin: "right",
  interval: 100,
});

scroll.reveal(`.about .image`, {
  origin: "top",
});

scroll.reveal(
  `.about-2 .content h3, .about-2 .content p,.about-2 .content .btn`,
  {
    origin: "top",
    interval: 100,
  }
);

scroll.reveal(`.about-2 .image`, {
  origin: "right",
});

scroll.reveal(
  `.about-3 .content h3, .about-3 .content p,.about-3 .content .btn`,
  {
    origin: "bottom",
    interval: 100,
  }
);

scroll.reveal(`.about-3 .image`, {
  origin: "top",
});

scroll.reveal(`.app .image`, {
  origin: "left",
});

scroll.reveal(`.app .content`, {
  origin: "right",
});

scroll.reveal(`.footer`, {
  origin: "bottom",
});
