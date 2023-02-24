const nav_items = document.querySelectorAll(".nav-item");
const section = document.querySelector("[section='content']");
const sec_attr = section.getAttribute("section-id");

const sec_attr_arr = ["h", "a", "m", "l", "e"];
const img_attr_arr = ["Home", "Account", "Marketplace", "Learning", "Explore"];

const check = (li) => {
  if (li.classList.contains("active-page")) li.classList.remove("active-page");
};

nav_items.forEach((i) => {
  i.addEventListener("click", () => {
    nav_items.forEach(check);
    i.classList.add("active-page");
  });
});
