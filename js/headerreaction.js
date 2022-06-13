(function(){

    const mapiconEl = document.querySelector('.hd_map')
    const menuIcon = document.querySelector('.hd_menu_icon')
    const menuNav = document.querySelector('.hd_nav_menu_wrap')
    const menuWrap = document.querySelector('.hd_menu_wrap')  
    const mapNav = document.querySelector('.hd_nav_map')
    const menubar = document.querySelectorAll('.hd_menu')
    const headerEl = document.querySelector('.inheader')
    const logo = document.querySelector('.hd_logo_wrap')
    

    const mapClick = () =>{
        mapNav.classList.toggle('nav_on')
        headerEl.classList.toggle('inheader_3')
        menubar[0].classList.toggle('hd_menu_3')
        menubar[1].classList.toggle('hd_menu_3')
        menubar[2].classList.toggle('hd_menu_3')
        logo.classList.toggle('hd_logo_wrap_3')
        mapiconEl.classList.toggle('hd_map_icon_3')
    }
    mapiconEl.addEventListener('click', mapClick)




    const menuClick = () =>{
        menuNav.classList.toggle('nav_on')
        mapNav.classList.remove('nav_on')
        menubar[0].classList.toggle('hd_bar_1')
        menubar[1].classList.toggle('hd_bar_2')
        menubar[2].classList.toggle('hd_bar_3')
        headerEl.classList.toggle('inheader_4')
        menubar[0].classList.toggle('hd_menu_4')
        menubar[1].classList.toggle('hd_menu_4')
        menubar[2].classList.toggle('hd_menu_4')
        logo.classList.toggle('hd_logo_wrap_4')
        mapiconEl.classList.toggle('hd_map_icon_4')
    }

    menuIcon.addEventListener('click', menuClick)
})()

