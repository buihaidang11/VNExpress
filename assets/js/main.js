var dropItem = document.getElementsByClassName('thoisu')[0]
var linkItems = document.getElementsByClassName('nav-link-item')[0]
var headerBot = document.getElementsByClassName('header-bot')[0]
var headerBotMobile = document.getElementsByClassName('header-bot-mobile')[0]
var arrowRight = document.getElementsByClassName('header-arrow-right')[0]
var header_close = document.getElementsByClassName('header-top')[0]
var body_close = document.getElementsByClassName('body_')[0]
var click_button = document.getElementsByClassName('collapse')


header_close.addEventListener("click", function () {
    click_button[0].classList.remove('show')
})

body_close.addEventListener("click", function () {
    click_button[1].classList.remove('show')
})


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
    { id: 1, name: 'Th???i s???' },
    { id: 2, name: 'G??c nh??n' },
    { id: 3, name: 'Th??? gi???i' },
    { id: 4, name: 'Video' },
    { id: 5, name: 'Podcasts' },
    { id: 6, name: 'Kinh doanh' },
    { id: 7, name: 'Khoa h???c' },
    { id: 8, name: 'Gi???i tr??' },
    { id: 9, name: 'Th??? thao' },
    { id: 10, name: 'Ph??p lu???t' },
    { id: 11, name: 'Gi??o d???c' },
    { id: 12, name: 'S???c kh???e' },
    { id: 13, name: '?????i s???ng' },
    { id: 14, name: 'Du l???ch' },
    { id: 15, name: 'S??? h??a' },
    { id: 16, name: 'Xe' },
    { id: 17, name: '?? ki???n' },
    { id: 18, name: 'T??m s???' },
    { id: 19, name: 'H??i' }

]

const menuBread = document.getElementsByClassName('menu-bread')[0]


let array = listNavbar.map((item) => {
    return `
    <li class="menu-bread-item drop-item">
        <a class="menu-bread-link" href="#">${item.name}</a>
    </li>
    `
})

menuBread.innerHTML = `<li class="menu-bread-item home"><i class="fa-solid fa-house"></i></li>` + array.join("")

var getTimeNow = document.getElementsByClassName('time-now')[0]

var timeNow = new Date()
let day = timeNow.getDay()
let d = timeNow.getDate()
let m = timeNow.getMonth() + 1
let y = timeNow.getFullYear()

switch (day) {

    case 1:
        day = "Th??? hai"
        break
    case 2:
        day = "Th??? ba"
        break
    case 3:
        day = "Th??? t??"
        break
    case 4:
        day = "Th??? n??m"
        break
    case 5:
        day = "Th??? s??u"
        break
    case 6:
        day = "Th??? b???y"
        break
    default:
        day = "Ch??? nh???t"
        break
}


getTimeNow.innerHTML = day + ', ' + d + '/' + m + '/' + y
