window.addEventListener("scroll", () => {
  const header = document.querySelector(".logo");
  const nav = document.querySelector("nav");

  if (window.scrollY >= header.offsetHeight) {
    nav.classList.add("scroll");
  } else {
    nav.classList.remove("scroll");
  }
});
