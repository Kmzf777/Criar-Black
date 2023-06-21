const rightSections = document.querySelectorAll("#right-section");
const menuBtns = document.querySelectorAll("#menu-btn");

menuBtns.forEach((menuBtn) => {
  menuBtn.addEventListener("click", () => {
    const id = menuBtn.htmlFor;

    rightSections.forEach((section) => {
      if (section.className.startsWith(id))
        return (section.style.display = "flex");
      section.style.display = "none";
    });
  });
});
