const minecrafts = document.querySelectorAll('.minecraft')
const gtas = document.querySelectorAll('.gta')
const discords = document.querySelectorAll('.discord')
const others = document.querySelectorAll('.other')
const menuBtns = document.querySelectorAll('.products-menu__item')
const allItems = document.querySelectorAll('.products-box__item')

const filterItems = (btn) => {
    menuBtns.forEach(btn => {
        btn.classList.remove('products-menu__item--active')
    })
    allItems.forEach(item => {
        item.classList.add('active')
    })
    btn.classList.add('products-menu__item--active')
    if(btn.value == 0) {
        minecrafts.forEach(minecraft => {
            minecraft.classList.remove('active')
        })
    }
    if(btn.value == 1) {
        gtas.forEach(gta => {
            gta.classList.remove('active')
        })
    }
    if(btn.value == 2) {
        discords.forEach(discord => {
            discord.classList.remove('active')
        })
    }
    if(btn.value == 3) {
        others.forEach(other => {
            other.classList.remove('active')
        })
    }
}

menuBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterItems(btn)
    })
})