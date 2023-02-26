const nav_items = document.querySelectorAll(".nav-item");
const section = document.querySelector("[section='content']");
const sec_attr = section.getAttribute("section-id");

//*****   code for icons when clicked ******//

// const check = (li) => {
//   if (li.classList.contains("active-page")) li.classList.remove("active-page");
// };

// nav_items.forEach((i) => {
//   i.addEventListener("click", () => {
//     nav_items.forEach(check);
//     i.classList.add("active-page");
//   });
// });

//*****   code for auto detection ******//

const changeIcon = (sec_attr_, img_attr) => {
  if (sec_attr == sec_attr_) {
    nav_items.forEach((i) => {
      if (i.querySelector("a>img").alt == img_attr) {
        i.classList.add("active-page");
      }
    });
  }
};

changeIcon("h", "Home");
changeIcon("e", "Explore");
changeIcon("m", "Marketplace");
changeIcon("a", "Account");
changeIcon("l", "Learning");
