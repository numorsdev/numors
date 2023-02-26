const nav_items = document.querySelectorAll(".nav-item");
const section = document.querySelector("[section='content']");
const sec_attr = section.getAttribute("section-id");

const check = (li) => {
  if (li.classList.contains("active-page")) li.classList.remove("active-page");
};

nav_items.forEach((i) => {
  i.addEventListener("click", () => {
    nav_items.forEach(check);
    i.classList.add("active-page");
  });
});
