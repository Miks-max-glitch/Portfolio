// ================= SMOOTH SCROLL WITH OFFSET =================
const navLinks = document.querySelectorAll(".navbar a");
const navbar = document.querySelector(".navbar");

navLinks.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const targetId = link.getAttribute("href");
    const target = document.querySelector(targetId);

    const offset = navbar.offsetHeight;
    const position = target.offsetTop - offset;

    window.scrollTo({
      top: position,
      behavior: "smooth"
    });
  });
});

// ================= ACTIVE NAV LINK ON SCROLL =================
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - navbar.offsetHeight - 50;
    if (scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});

// ================= NAVBAR SHADOW ON SCROLL =================
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.style.boxShadow = "0 10px 30px rgba(0,0,0,0.4)";
  } else {
    navbar.style.boxShadow = "none";
  }
});

// ================= BACK TO TOP =================
const backToTop = document.querySelector(".top-link");

backToTop.addEventListener("click", e => {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

// ================= CONTACT FORM (FRONTEND ONLY) =================
const form = document.querySelector(".contact-form");

form.addEventListener("submit", e => {
  e.preventDefault();

  const name = form.querySelector("input[type='text']").value;
  const email = form.querySelector("input[type='email']").value;
  const message = form.querySelector("textarea").value;

  if (!name || !email || !message) {
    alert("Please fill in all fields.");
    return;
  }

  alert("Thanks for your message! 🚀\n(This is a frontend demo)");

  form.reset();
});
