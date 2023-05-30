$(document).ready(function () {
    $('.company__slick').slick({
        infinite: true,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 6000,
    });
    const menu_item = $(".header__menu-item");
    for (let i = 0; i < menu_item.length; i++) {
        if (menu_item[i].children[1]) {
            menu_item[i].children[0].style["border-radius"] = "10px 10px 0 0"
        }
    }
});




