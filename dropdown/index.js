const DropdownBtn = document.querySelector(".dropdown__btn");

const DropdownItems = document.querySelector(".dropdown__items");

function toggleDropdown() {
  DropdownItems.classList.toggle("dropdown__items--open");
  DropdownBtn.classList.toggle("dropdown__btn--open");
}
DropdownBtn.addEventListener("click", () => toggleDropdown());
