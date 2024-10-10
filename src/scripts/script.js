window.addEventListener("scroll", () => {
  const elements = document.querySelectorAll(".about-text, .motivation-text");

  elements.forEach((element) => {
    const position = element.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (position < windowHeight && position > 0) {
      element.classList.add("animate");
    } else {
      element.classList.remove("animate");
    }
  });
});
document.querySelectorAll(".link-menu").forEach((link) => {
  link.addEventListener("click", function (event) {
    event.preventDefault();
    const targetId = this.getAttribute("href").substring(1);
    document
      .getElementById(targetId)
      .scrollIntoView({ behavior: "smooth", block: "start" });
  });
  document.removeEventListener();
});
// document
//   .getElementById("link-menu")
//   .addEventListener("click", function (event) {
//     event.preventDefault();
//     document
//       .getElementById("about-section")
//       .scrollIntoView({ behavior: "smooth" });
//   });
