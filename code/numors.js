const nav_item = document.querySelectorAll(".nav-item");

const check = (li) => {
  if (li.classList.contains("active-page")) li.classList.remove("active-page");
};

nav_item.forEach((i) => {
  i.addEventListener("click", () => {
    nav_item.forEach(check);
    i.classList.add("active-page");
  });
});
