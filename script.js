// TOGGLE ICON NAVBAR
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

// SCROLL SECTIONS
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 100;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      // ACTIVE NAVBAR LINKS
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
      //   ACTIVE SECTIONS FOR ANIMATION ON SCROLL
      sec.classList.add("show-animate");
    }
    // IF WANT TO USE ANIMATION THAT REPEATS ON SCROLL USE THIS
    else {
      sec.classList.remove("show-animate");
    }
  });
  // STICKY HEADER
  let header = document.querySelector("header");

  header.classList.toggle("sticky", window.scrollY > 100);

  //   REMOVE TOGGLE ICON AND NAVBAR WHEN CLICK NAVBAR LINKS (SCROLL)
  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");

  //   ANIMATION FOOTER ON SCROLL
  let footer = document.querySelector("footer");

  footer.classList.toggle(
    "show-animate",
    this.innerHeight + this.scrollY >= document.scrollingElement.scrollHeight
  );
};
