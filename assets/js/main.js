
// Tabs JS
document.addEventListener("DOMContentLoaded", function () {
  const tabLinks = document.querySelectorAll(".tab-button"); // সাধারণ tabs
  const breakBtn = document.querySelector(".break"); // break-tab (class="break" ধরে নেওয়া)
  const tabBodies = document.querySelectorAll(".tabs-cards-main-wrap");
  let timerOpacity;

  // সাধারণ tab-buttons click handler
  tabLinks.forEach(tabLink => {
    tabLink.addEventListener("click", function(e) {
      e.preventDefault();
      e.stopPropagation();
      clearTimeout(timerOpacity);

      // clicked tab active add হবে
      this.classList.add("active");

      // সব content hide
      tabBodies.forEach(body => body.classList.remove("active"));

      // clicked content show
      const targetId = this.getAttribute("href");
      const targetBody = document.querySelector(targetId);
      if (targetBody) {
        timerOpacity = setTimeout(() => {
          targetBody.classList.add("active");
        }, 50);
      }
    });
  });

  // break button click handler
  if (breakBtn) {
    breakBtn.addEventListener("click", function(e) {
      e.preventDefault();
      e.stopPropagation();

      // সব tab-button থেকে active remove
      tabLinks.forEach(link => link.classList.remove("active"));

      // সব content hide
      tabBodies.forEach(body => body.classList.remove("active"));

      // break-btn নিজে active হবে না
    });
  }
});
































