$(document).ready(function () {
    $('.company__slick').slick({
        infinite: true,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 6000,
    });
    const header_item = $(".header__menu-item");
    const header_dropdown = $(".header__dropdown");
    console.log(header_item)

    for (let i = 0; i < header_item.length; i++) {
        console.log(header_item[i])
        if (header_item[i].children[1]) {
            header_item[i].children[0].style["border-radius"] = "10px 10px 0 0";
        }
    }
    //$('header__menu-btn').hover(
    //    function () {
    //        console.log($(this));
    //    }
    //)
    $('.header__dropdown-btn').hover(
        function () {
            $($(this)[0].parentElement.parentElement.children[0]).addClass("active");
        },
        function () {
            $($(this)[0].parentElement.parentElement.children[0]).removeClass("active");
        }

    );
});




