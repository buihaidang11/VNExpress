var dropItem = document.getElementsByClassName('thoisu')[0]
var linkItems = document.getElementsByClassName('nav-link-item')[0]
var headerBot = document.getElementsByClassName('header-bot')[0]
var headerBotMobile = document.getElementsByClassName('header-bot-mobile')[0]
var arrowRight = document.getElementsByClassName('header-arrow-right')[0]


dropItem.addEventListener("mouseover", function () {
    linkItems.classList.remove('d-none')
})

dropItem.addEventListener("mouseout", function () {
    linkItems.classList.add('d-none')
})

var home_none = document.getElementsByClassName('home1')
var home_active = document.getElementsByClassName('home2')[0]

window.document.addEventListener("scroll", function () {
    var y = pageYOffset

    if (y > 60) {
        headerBot.classList.add('fixed-top')
        home_none[0].classList.add('d-lg-none')
        home_none[1].classList.add('d-lg-none')
        home_none[2].classList.add('d-lg-none')

        home_active.classList.remove('d-lg-none')
    }
    else {
        headerBot.classList.remove('fixed-top')
        home_none[0].classList.remove('d-lg-none')
        home_none[1].classList.remove('d-lg-none')
        home_none[2].classList.remove('d-lg-none')

        // home_active.classList.add('d-lg-none')
    }
})


window.document.addEventListener("scroll", function () {
    var y = pageYOffset

    if (y > 100) {
        headerBotMobile.classList.add('fixed-top')
    }
    else {
        headerBotMobile.classList.remove('fixed-top')
    }
})

var animationInfor_gr = document.getElementsByClassName('infor-gr')

window.document.addEventListener("scroll", function () {
    var y = pageYOffset
    if (y < 800) {
        animationInfor_gr[0].classList.remove('infor-gr-1')
        animationInfor_gr[1].classList.remove('infor-gr-2')
        animationInfor_gr[2].classList.remove('infor-gr-3')
    }

    if (y >= 900) {
        animationInfor_gr[0].classList.add('infor-gr-1')
        animationInfor_gr[1].classList.add('infor-gr-2')
        animationInfor_gr[2].classList.add('infor-gr-3')
    }

    if (y > 1300) {
        animationInfor_gr[0].classList.remove('infor-gr-1')
        animationInfor_gr[1].classList.remove('infor-gr-2')
        animationInfor_gr[2].classList.remove('infor-gr-3')
    }
})

var navMoveLeft = document.getElementsByClassName('header-nav-moveLeft')[0]

window.document.addEventListener("scroll", () => {
    var y = pageYOffset
    if (y < 60) {
        navMoveLeft.classList.add('home3')
        home_active.classList.add('d-lg-none')
    }
    if (y >= 60) {
        navMoveLeft.classList.remove('home3')

    }
})





var breadItems = document.getElementsByClassName('menu-bread-item')

var i = 0
arrowRight.onclick = function () {

    document.getElementsByClassName('menu-bread')[0].scrollLeft += breadItems[i].clientWidth
    i++
    if (i == 15) {
        i -= 15
    }
}


$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 4
        }
    }
})

var listNavbar = [
    { id: 1, name: 'Thời sự' },
    { id: 2, name: 'Góc nhìn' },
    { id: 3, name: 'Thế giới' },
    { id: 4, name: 'Video' },
    { id: 5, name: 'Podcasts' },
    { id: 6, name: 'Kinh doanh' },
    { id: 7, name: 'Khoa học' },
    { id: 8, name: 'Giải trí' },
    { id: 9, name: 'Thể thao' },
    { id: 10, name: 'Pháp luật' },
    { id: 11, name: 'Giáo dục' },
    { id: 12, name: 'Sức khỏe' },
    { id: 13, name: 'Đời sống' },
    { id: 14, name: 'Du lịch' },
    { id: 15, name: 'Số hóa' },
    { id: 16, name: 'Xe' },
    { id: 17, name: 'Ý kiến' },
    { id: 18, name: 'Tâm sự' },
    { id: 19, name: 'Hài' }

]