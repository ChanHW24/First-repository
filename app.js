const toggleButton = document.querySelector('.hamburger')
const toggleButtonIcon = document.querySelector('.hamburger i')
const dropDownMenu = document.querySelector('.dropdownmenu')

toggleButton.onclick = function () {
    dropDownMenu.classList.toggle('open')
    const isOpen = dropDownMenu.classList.contains('open')

    toggleButtonIcon.classList = isOpen
        ? 'fa-solid fa-xmark'
        : 'fa-solid fa-bars'
}