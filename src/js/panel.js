const burgerBtn = document.querySelector('.panel-burger')
const menu = document.querySelector('.panel-menu')
const openMenu = () => {
    menu.classList.toggle('panel-active')
}



burgerBtn.addEventListener('click', openMenu)