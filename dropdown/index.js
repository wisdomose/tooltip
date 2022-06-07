const DropdownBtn = document.querySelector(".dropdown__btn");

const DropdownItems = document.querySelector(".dropdown__items");

function toggleDropdown() {
  DropdownItems.classList.toggle("dropdown__items--open");
}

DropdownBtn.addEventListener("click", () => toggleDropdown());
