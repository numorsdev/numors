const nav_items = document.querySelectorAll(".nav-item");
const section = document.querySelector("[section='content']");
const sec_attr = section.getAttribute("section-id");

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

// for home page

if (sec_attr == "h") {
  nav_items.forEach((i) => {
    if (i.querySelector("a>img").alt == "Home") {
      i.classList.add("active-page");
    }
  });
}

// for explore page

if (sec_attr == "e") {
  console.log("explore page detected");
  nav_items.forEach((i) => {
    if (i.querySelector("a>img").alt == "Explore") {
      i.classList.add("active-page");
    }
  });
}

// for marketplace page

if (sec_attr == "m") {
  nav_items.forEach((i) => {
    if (i.querySelector("a>img").alt == "Marketplace") {
      i.classList.add("active-page");
    }
  });
}

// for account page

if (sec_attr == "a") {
  nav_items.forEach((i) => {
    if (i.querySelector("a>img").alt == "Account") {
      i.classList.add("active-page");
    }
  });
}

// learning page

if (sec_attr == "l") {
  nav_items.forEach((i) => {
    if (i.querySelector("a>img").alt == "Learning") {
      i.classList.add("active-page");
    }
  });
}
