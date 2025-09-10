
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

// Sidebar Js
document.addEventListener("DOMContentLoaded", function () {
  const toggleBtn = document.querySelector(".toggle-btn");

  toggleBtn.addEventListener("click", function () {
    // current active tab khujbo
    const activeTab = document.querySelector(".tabs-cards-main-wrap.active");
    if (!activeTab) return;

    // active tab er sidebar khujbo
    const sidebar = activeTab.querySelector(".composite-product-cards-sidebar");
    if (sidebar) {
      sidebar.classList.add("active");

      // close button handle
      const closeBtn = sidebar.querySelector(".close-btn");
      if (closeBtn) {
        closeBtn.addEventListener("click", function () {
          sidebar.classList.remove("active");
        });
      }
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





















































