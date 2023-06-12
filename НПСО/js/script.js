$(document).ready(function () {
    $('.company__slick').slick({
        infinite: true,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 6000,
        arrows: false,
    });
    const header_item = $(".header__menu-item");

    for (let i = 0; i < header_item.length; i++) {

        if (header_item[i].children[1]) {
            header_item[i].children[0].style["border-radius"] = "10px 10px 0 0";
        }
    }
    $('.header__dropdown-btn').hover(
        function () {
            $($(this)[0].parentElement.parentElement.children[0]).addClass("active");
        },
        function () {
            $($(this)[0].parentElement.parentElement.children[0]).removeClass("active");
        }

    );
    $('.header__menu-btn').click(function () {
        $($(this)[0].nextElementSibling).toggleClass('active-dropdown');
    })

    $(".header__burger").click(function () {
        $(this).toggleClass('open_menu');

        $('.filter').toggleClass("showfilter");
        $('.header__menu').toggleClass('active');
    })

    $('.filter').click(function () {
        $(this).toggleClass('showfilter');
        $(".header__burger").toggleClass('open_menu');
        $('.header__menu').toggleClass('active');
    })

});




