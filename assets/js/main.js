
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

// Cart Tabs Js
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

// Counter Js
document.querySelectorAll('.counter-cart-box').forEach(counter => {
  const minus = counter.querySelector('.minus');
  const plus = counter.querySelector('.plus');
  const number = counter.querySelector('.counter-number');
  let count = parseInt(number.textContent);

  minus.addEventListener('click', () => {
    if (count > 1) {
      count--;
      number.textContent = count;
    }
  });

  plus.addEventListener('click', () => {
    count++;
    number.textContent = count;
  });
});














































