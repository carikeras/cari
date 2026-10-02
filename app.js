(() => {
  "use strict";

  const year = document.querySelector("[data-year]");
  if (year) year.textContent = String(new Date().getFullYear());

  const searchButton = document.querySelector("[data-cari-search]");
  if (searchButton) {
    searchButton.addEventListener("click", () => {
      window.location.href = "https://academy.cari.cc.cd/search";
    });
  }
})();
