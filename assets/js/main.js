
// Tabs JS
// Header Sticky Js
document.addEventListener("DOMContentLoaded", function () {
  var header = document.querySelector(".header-sticky");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 0) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
  });
});

// document.addEventListener("DOMContentLoaded", function () {
//   const tabLinks = document.querySelectorAll(".composite-product-cards-menu .tab-button");
//   const tabContents = document.querySelectorAll(".tabs-cards-main-wrap");

//   tabLinks.forEach(tabLink => {
//     tabLink.addEventListener("click", function(e) {
//       e.preventDefault();
//       e.stopPropagation();

//       const targetId = this.getAttribute("href");
//       const targetContent = document.querySelector(targetId);

//       // Remove Tab
//       tabContents.forEach(c => c.classList.remove("active"));

//       // Show Tab
//       if (targetContent) {
//         targetContent.classList.add("active");
//       }

//       this.classList.toggle("active");
//     });
//   });
// });

document.addEventListener("DOMContentLoaded", function () {
  const tabLinks = document.querySelectorAll(".composite-product-cards-menu .tab-button");
  const tabContents = document.querySelectorAll(".tabs-cards-main-wrap");

  if (tabLinks.length > 0) {
    tabLinks[0].classList.add("active");
  }

  if (tabContents.length > 0) {
    tabContents.forEach(c => c.classList.remove("active"));
    tabContents[0].classList.add("active");
  }

  tabLinks.forEach((tabLink, index) => {
    tabLink.addEventListener("click", function(e) {
      e.preventDefault();
      e.stopPropagation();

      const targetId = this.getAttribute("href");
      const targetContent = document.querySelector(targetId);

      // Hide Tab
      tabContents.forEach(c => c.classList.remove("active"));

      // Show Tab
      if (targetContent) {
        targetContent.classList.add("active");
      }

      if (index !== 0) {
        this.classList.toggle("active");
      }
    });
  });
});











































