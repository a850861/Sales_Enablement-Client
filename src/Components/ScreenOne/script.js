document.addEventListener("DOMContentLoaded", function () {
  const dropdownSelect = document.querySelector(".dropdown-select");
  const dropdownMenu = document.querySelector(".dropdown-menu");

  if (!dropdownSelect || !dropdownMenu) {
    console.error("Could not find the required elements");
    return;
  }

  console.log("Dropdown elements found");

  dropdownSelect.addEventListener("click", function () {
    console.log("Dropdown select clicked");
    dropdownMenu.classList.toggle("open");
    console.log("Toggled open class");
  });
});
