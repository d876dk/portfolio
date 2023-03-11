let blockHeight = document.getElementsByClassName("features__item")[0].getBoundingClientRect().height;
let progress = document.getElementsByClassName("fill_bg");
let totalHeight = [];
const header = $('.header__text');

for (var i = 0; i < progress.length; i++) {
  totalHeight.push($(progress[i]).offset().top); 
}
window.onscroll = function(){
  if(window.innerWidth > 1120){
    for(let i = 0;i<totalHeight.length;i++){
      let e = document.querySelectorAll(".features__item-icon")[i];
      if((window.scrollY+ 0.45*window.innerHeight+200>=totalHeight[i])){
        let progressHeight = ((window.scrollY+ 0.45*window.innerHeight-totalHeight[i])/(blockHeight))*100;
        if(progressHeight >=100){
          progressHeight = 100;
        }
        else if(progressHeight < 1){
          progressHeight = 0;
           e.querySelector("svg").querySelectorAll("path,rect,circle").forEach(t=>{t.style.stroke="#e2e2e2";t.style.fill = "#e2e2e2"});
           if(e.querySelector("g .no_fill")){
            e.querySelector("g .no_fill").style.fill="transparent";
          }
        }
        else if(progressHeight > 1 && progressHeight<100)
        {
          e.querySelector("svg").querySelectorAll("path,rect,circle").forEach(t=>{t.style.stroke="#3dd598";t.style.fill = "#3dd598"});
          if(e.querySelector("g .no_fill")){
            e.querySelector("g .no_fill").style.fill="transparent";
          }
        }
        e = document.querySelectorAll(".features__item-icon")[i+1];
        if(totalHeight[progress.length-1]+blockHeight < window.scrollY+ 0.45*window.innerHeight){
          e.querySelector("svg").querySelectorAll("path,rect,circle").forEach(t=>{t.style.stroke="#3dd598";t.style.fill = "#3dd598"});
        }
        else if(i == 3){
          e.querySelector("svg").querySelectorAll("path,rect,circle").forEach(t=>{t.style.stroke="#e2e2e2";t.style.fill = "#e2e2e2"});
        }
        progress[i].style.height = progressHeight + "%";  
      }
      
      let download = document.getElementsByClassName("download")[0].getBoundingClientRect().height;
      let mouse = window.scrollY*1.25;


      if(mouse < $(".features").offset().top){
        $(header[0]).addClass('active');
      }
      else 
        $(header[0]).removeClass('active');

      if(mouse > $(".features").offset().top)
        $(header[1]).addClass('active');
      else
        $(header[1]).removeClass('active');

      if(mouse > $(".more").offset().top){
        $(header[2]).addClass('active');
        $(header[1]).removeClass('active');
      }
      else
        $(header[2]).removeClass('active');

      if(mouse-document.getElementsByClassName("more")[0].getBoundingClientRect().height > $(".requirements").offset().top){
        $(header[3]).addClass('active');
        $(header[2]).removeClass('active');
      }
      else
        $(header[3]).removeClass('active');
      // if(mouse > $(".features").offset().top){
      //   $(header[1]).addClass('active');
      //   $(header[0]).removeClass('active');
      // }
      // if($(".download").offset().top+download < mouse){
      //   $(header[1]).removeClass('active');
      //   $(header[2]).addClass("active");
      // }
      // if((mouse  < $(".download").offset().top+download) ){
      //   $(header[2]).removeClass('active');
      //   $(header[1]).addClass("active");
      // }

    }
  }
}




// let progress = document.getElementsByClassName("fill_bg");
// let totalHeight = $(progress[0]).offset();
// let e = document.querySelectorAll("section#Overview")[0];
// let n = (window.scrollY + .45 * window.innerHeight - o) / e.getBoundingClientRect().height * 100;


// console.log(progress[0])
// window.onscroll = function(){
//   // if(window.pageYOffset)
//   let progressHeight = (window.pageYOffset / (totalHeight.top))*10;
//   progress[0].style.height = progressHeight + "%";
//   console.log(window.pageYOffset);
// }




// $(document).ready(function() { 
//   $('.rates__slick').slick({
//     arrows: true,
//     dots: false,
//     infinite: true,
//     speed: 500,
//     fade: true,
//     adaptiveHeight: true,
//     easing: 'ease',
//     appendArrows: '.rates__arrows',
//     prevArrow: '<span class="slick-prev"><</span>',
//     nextArrow: '<span class="slick-next">></span>'
//   });

//   $('.partners__slider-1').slick({
//         arrows: false,
//         dots: false,
//         slidesToShow: 6,
//         slidesToScroll: 1,
//         easing: 'ease',
//         autoplay: true,
//         pauseOnFocus: true,
//         autoplaySpeed: 2500,
//         speed: 1500,
//         responsive: [{
//             breakpoint: 480,
//             settings: {
//                 slidesToShow: 2,
//                 slidesToScroll: 1,
//                 centerMode: false,
//                 variableWidth: true,
//             }
//         }],
//     });
//     $('.partners__slider-2').slick({
//         arrows: false,
//         dots: false,
//         slidesToShow: 6,
//         slidesToScroll: 2,
//         easing: 'ease',
//         autoplay: true,
//         pauseOnFocus: true,
//         autoplaySpeed: 2700,
//         speed: 2000,
//         responsive: [{
//             breakpoint: 480,
//             settings: {
//                 slidesToShow: 3,
//                 slidesToScroll: 1,
//                 centerMode: true,
//                 focusOnSelect: true,
//                 variableWidth: true
//             }
//         }],
//     });




// $(".faq__item:first").addClass("faq-active");
//  $(".faq__item .faq__item:not(:first)").hide();
//  $(".faq__item").click(function () {
//    $(this).toggleClass("faq-active");
//    $(this).siblings(".faq__item").removeClass("faq-active");
//  });


//   $(".header__nav-img").click(function () {
//    $('div.header__nav-menu').toggleClass("active");
//     $('a.header__nav-btn').on('click', function(event) {
//     event.preventDefault();
//   });
//  });


//   $('.rates__slick').on(`init reInit`, function (event, slick) {
//       $('.rates__arrows-numbers-1').text('0' + 1 + ' '); // ' / ' + '0' + slick.slideCount
//   })



//   $('.rates__slick').on(`afterChange`, function (event, slick, currentSlide, nextSlide) {
//     $('.rates__arrows-numbers-1').text('0' + (currentSlide + 1) + ' '); // + ' / 0' + slick.slideCount
//   })

// });





//  // {$('.view-testimonials .slick').on('init reInit afterChange',function(event,slick,currentSlide,nextSlide){
//   //   var i=(currentSlide?currentSlide:0)+1;
//   //   var i=i>10?i:'0'+i;
//   //   var count=slick.slideCount>10?slick.slideCount:'0'+slick.slideCount;
//   //   $(this).find('.slick-slide-num').html('<span class="slick-slide-num-current">'+i+'</span> / '+count);
//   !function(e){var t={};function o(n){if(t[n])return t[n].exports;var l=t[n]={i:n,l:!1,exports:{}};return e[n].call(l.exports,l,l.exports,o),l.l=!0,l.exports}o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var l in e)o.d(n,l,function(t){return e[t]}.bind(null,l));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/www/",o(o.s=0)}([function(e,t,o){"use strict";o.r(t);o(1),o(2),o(3);document.addEventListener("DOMContentLoaded",()=>{let e=document.querySelectorAll(".popup-item"),t=document.querySelectorAll(".header.main")[0],o=document.getElementById("menu-btn"),n=document.getElementById("menu-btn2"),l=.01*window.innerHeight,r=document.querySelectorAll(".content-wrapper .content h2,.content-wrapper .content.old_howtos_design h3"),i=document.querySelectorAll(".content-wrapper .left-menu a");document.documentElement.style.setProperty("--vh",l+"px"),document.querySelectorAll("button.howtoclicker").length&&d(),s(),c(),document.querySelectorAll(".tab .question .head").forEach(e=>{e.addEventListener("click",t=>{let o=e.parentNode.querySelectorAll(".body")[0];if(o.classList.contains("show")){e.classList.remove("show"),o.classList.remove("show");let t=e.querySelector("i");t&&t.classList.remove("rotate")}else{e.classList.add("show"),o.classList.add("show");let t=e.querySelector("i");t&&t.classList.add("rotate")}})}),document.querySelectorAll(".header.fixed .items .ul-item").forEach(e=>{e.addEventListener("click",e=>{n.checked&&(n.checked=!1,document.body.classList.remove("overlayed"),n.closest(".header").classList.remove("open"))})});const a=function(){0!=window.scrollY&&setTimeout((function(){window.scroll(0,0),a()}),10)};let y=document.querySelector("#back_to_top");y.addEventListener("click",a),window.onscroll=function(){b()};const p=document.querySelectorAll("section, .landing-action-h, .landing-action-items"),f=document.querySelectorAll(".landing-features-step-line"),h=document.querySelectorAll(".header.fixed")[0],g=document.querySelectorAll(".header.fixed .items .ul-item");let v=!1,w=1;const L=document.querySelectorAll(".exact-rating__item");if(document.querySelector(".exact-rating__active")){let e=document.querySelector(".exact-rating__body").getAttribute("app");v=!!localStorage.getItem("rating_"+e),w=document.querySelector(".landing-first-stars-bal").innerHTML,L.forEach((function(t){t.onmouseover=function(e){if(v)return;let t=e.target.value;document.querySelector(".exact-rating__active").setAttribute("style","--rating: "+t)},t.onclick=async function(t){if(v)return;let o=t.target.value;document.querySelector(".exact-rating__active").setAttribute("style","--rating: "+o),v=!0;let n=await u("?AJAX=set_rating",{key:e,value:o});document.querySelector(".reviews-count").innerHTML=n.init_counter+n.user_counter,localStorage.setItem("rating_"+e,"true")}})),document.querySelector(".exact-rating__body").onmouseleave=function(){v||document.querySelector(".exact-rating__active").setAttribute("style","--rating: "+w)}}let S=-1;function b(){document.body.scrollTop>100||document.documentElement.scrollTop>100?document.body.classList.contains("scrollTop")&&(y.style.display="flex"):y.style.display="none";let e=document.querySelectorAll("section#Overview")[0];if(e){var t=e.getBoundingClientRect();t.top<window.innerHeight&&t.bottom>=0?h.classList.contains("show")&&h.classList.remove("show"):h.classList.add("show")}let o=document.getElementById("howto");if(o){let e=o.getBoundingClientRect().top,t=document.getElementById("navigation");e<=102?t.classList.add("sticky"):t.classList.remove("sticky");let n=document.getElementById("content-wrapper").getBoundingClientRect().bottom;n-t.getBoundingClientRect().height-102<=0?t.style.top=n-t.getBoundingClientRect().height+"px":t.style.top="102px";let l=document.getElementsByClassName("banner")[0];if(l){l.getBoundingClientRect().bottom<=20?h.classList.add("show"):h.classList.remove("show")}let c=0;r.forEach((e,t)=>{e.getBoundingClientRect().top<190&&(c=t)}),c++,i.forEach((e,t)=>{0!==t&&(e.classList.remove("active"),t===c&&e.classList.add("active"))})}var n="";p.forEach(e=>{const t=e.offsetTop;window.scrollY+.25*window.innerHeight>=t&&e.getAttribute("id")&&(n=e.getAttribute("id"))}),g.forEach(e=>{e.classList.remove("active"),e.classList.contains(n)&&e.classList.add("active")}),(()=>{let e=-1;var t,o,n,l;(f.forEach((t,o)=>{const n=t.getBoundingClientRect().top+window.scrollY;if(window.scrollY+.45*window.innerHeight>=n){e=o;let l=(window.scrollY+.45*window.innerHeight-n)/t.getBoundingClientRect().height*100;l>100&&(l=100,o===f.length-1&&(e=f.length))}}),S!=e)&&(S=e,null===(t=document.querySelectorAll(".landing-features-step img.scale")[0])||void 0===t||null===(o=t.classList)||void 0===o||o.remove("scale"),null===(n=document.querySelectorAll(".landing-features-step")[e])||void 0===n||null===(l=n.querySelectorAll("img")[0])||void 0===l||l.classList.add("scale"))})(),f.forEach((e,t)=>{const o=e.getBoundingClientRect().top+window.scrollY;if(window.scrollY+.45*window.innerHeight>=o){let n=(window.scrollY+.45*window.innerHeight-o)/e.getBoundingClientRect().height*100;n>0&&e.closest(".flex-column").querySelectorAll("svg path, svg rect, svg circle").forEach(e=>{e.classList.contains("no_fill")||(e.style.fill="var(--color-main)"),e.style.stroke="var(--color-main)"}),n>100?(n=100,t===f.length-1&&document.querySelectorAll(".landing-features-step .flex-column")[document.querySelectorAll(".landing-features-step .flex-column").length-1].querySelectorAll("svg path, svg rect, svg circle").forEach(e=>{e.classList.contains("no_fill")||(e.style.fill="var(--color-main)"),e.style.stroke="var(--color-main)"})):document.querySelectorAll(".landing-features-step .flex-column")[document.querySelectorAll(".landing-features-step .flex-column").length-1].querySelectorAll("svg path, svg rect, svg circle").forEach(e=>{e.classList.contains("no_fill")||(e.style.fill="#E2E2E2"),e.style.stroke="#E2E2E2"}),e.querySelector(".fill_bg").style.height=n+"%"}else e.querySelector(".fill_bg").style.height="0%",t>0&&e.closest(".flex-column").querySelectorAll("svg path, svg rect, svg circle").forEach(e=>{e.classList.contains("no_fill")||(e.style.fill="#E2E2E2"),e.style.stroke="#E2E2E2"})})}window.addEventListener("resize",(function(e){window.innerWidth>1e3&&document.body.classList.contains("overlayed")?document.body.classList.remove("overlayed"):window.innerWidth<=1e3&&t.classList.contains("open")&&document.body.classList.add("overlayed");let o=.01*window.innerHeight,n=1;n=window.innerWidth/1920,document.documentElement.style.setProperty("--vh",o+"px"),document.documentElement.style.setProperty("--vw",""+n)}));let E=1;E=window.innerWidth/1920,document.documentElement.style.setProperty("--vw",""+E),o.addEventListener("change",(function(){this.checked?(document.body.classList.add("overlayed"),o.closest(".header").classList.add("open")):(document.body.classList.remove("overlayed"),o.closest(".header").classList.remove("open"))})),null==n||n.addEventListener("change",(function(){this.checked?(document.body.classList.add("overlayed"),n.closest(".header").classList.add("open")):(document.body.classList.remove("overlayed"),n.closest(".header").classList.remove("open"))}));let q=()=>{e.forEach(e=>{let o=e.querySelector(".popup-content"),n=e.querySelector(".arrow-item");n&&n.classList.remove("rotate"),o.classList.remove("d-flex"),t.classList.remove("white-bg")}),document.querySelectorAll(".lang_wrap").forEach(e=>{let o=e.querySelector(".popup-content");e.querySelectorAll(".arrow-item").forEach(e=>e.classList.remove("rotate")),o.classList.remove("d-flex"),t.classList.remove("white-bg")})};e.forEach(e=>{let o=e.querySelector(".popup-content"),n=e.querySelector(".arrow-item");e.addEventListener("click",e=>{if(o.classList.contains("d-flex"))o.contains(e.target)||q();else{if(document.querySelector(".lang_wrap .popup-content").classList.contains("d-flex"))return void q();q(),n&&n.classList.add("rotate"),o.classList.add("d-flex"),o.classList.contains("header-menu__products")&&t.classList.add("white-bg")}})}),document.querySelector(".popup-content .close").addEventListener("click",e=>{q()}),document.querySelectorAll(".lang_wrap").forEach(e=>{let t=e.querySelector(".popup-content"),o=e.querySelectorAll(".arrow-item");e.addEventListener("click",e=>{e.target.classList.contains("svg-Cross")||(t.classList.contains("d-flex")?t.contains(e.target)||q():(q(),o.forEach(e=>e.classList.add("rotate")),t.classList.add("d-flex")))})}),document.addEventListener("click",t=>{let o=!1;e.forEach(e=>{let n=e.querySelector(".popup-content");o=o||e.contains(t.target)||n.contains(t.target)}),document.querySelectorAll(".lang_wrap").forEach(e=>{let n=e.querySelector(".popup-content");o=o||e.contains(t.target)||n.contains(t.target)}),!o&&document.querySelector(".lang_wrap .popup-content").classList.contains("d-flex")&&t.preventDefault(),o||q(),document.querySelector(".select_btn")&&(document.querySelector(".select_btn").contains(t.target)||document.querySelector(".options_wrapper").contains(t.target)||(document.querySelector(".select_btn").classList.remove("clicked"),document.querySelector(".select_btn .arrow-item").classList.remove("rotate"),document.querySelector(".options_wrapper").classList.remove("show")))}),document.addEventListener("keyup",t=>{if(27==t.keyCode){let t=!1;e.forEach(e=>{let o=e.querySelector(".popup-content");t=t||o.classList.contains("d-flex")}),t&&q()}}),b(),l=.01*window.innerHeight,document.documentElement.style.setProperty("--vh",l+"px");let A=document.querySelector.bind(document);var _,k;A("#cookie-law")&&(_="cookielaw",((k=document.cookie.match(new RegExp("(?:^|; )"+_.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g,"\\$1")+"=([^;]*)")))?decodeURIComponent(k[1]):void 0)||(A("#cookie-law").style.display="block",A("#cookie-law-btn").onclick=m));var x,C=document.querySelectorAll("iframe.lazy-iframe"),T=function(){x&&clearTimeout(x),x=setTimeout((function(){C.forEach((function(e){if(e.getBoundingClientRect().top<window.innerHeight+.4*window.innerHeight&&!e.src){e.src=e.dataset.src,e.classList.remove("lazy-iframe");var t=e.getAttribute("data-src");e.src=t,e.addEventListener("load",(function(){e.removeAttribute("data-src")}))}}))}),20)};C.length&&(window.addEventListener("scroll",T),T())});var n=document.querySelector.bind(document),l=document.querySelectorAll.bind(document);function c(){if(!n("#FAQ")){let e=n('[href="#FAQ"]');e&&e.parentNode.removeChild(e)}}var r=!1;function i(){return r?"en":/^\/\w\w\//.test(document.location.pathname)?document.location.pathname.split("/").slice(1).shift():"en"}function s(){let e=n("input.howtosearcher");e&&e.addEventListener("keydown",async t=>{if("Enter"!=t.key)return;let o=e.value;l("button.howtoclicker").forEach(e=>e.classList.remove("active")),n(".ajaxLinks").innerHTML="";let{list:c,error:r}=await u("?AJAX=howtos_searcher",{lang:i(),query:o});c=c.map(e=>{let[t,o]=e;return`<a class="list-a" href="${o}">${t}</a>`}),n(".ajaxLinks").innerHTML=c.join("")})}function a(){let e=l("button.howtoclicker"),t=n(".ajaxLinks");e.forEach(o=>{o.addEventListener("click",async l=>{n("input.howtosearcher").value="",e.forEach(e=>e.classList.remove("active")),o.classList.add("active");let{list:c,error:r}=await u("?AJAX=howtos_clicker",{app:o.getAttribute("app"),lang:i()});c=c.map(e=>{let[t,o]=e;return`<a class="list-a" href="${o}">${t}</a>`}),t.innerHTML=c.join("")})});let o=n("button.howtoclicker.active");o&&o.click()}async function d(){var e,t;let o=l("button.howtoclicker"),c=[];o.forEach(e=>{c.push(e.getAttribute("app"))});let{list:s,error:d}=await u("?AJAX=howtos_tools",{keys:c,lang:i()});s&&s.length||(r=!0),o.forEach(e=>{s&&s.includes(e.getAttribute("app"))?e.classList.add("c-"+Math.ceil(s.length/2)):e.remove()}),null==n("button.howtoclicker.active")&&(null===(e=n("button.howtoclicker"))||void 0===e||e.classList.add("active")),null===(t=n(".tabs.hide"))||void 0===t||t.classList.remove("hide"),n("button.howtoclicker")&&a()}function u(e,t){return fetch(e,{method:"POST",headers:{"X-Requested-With":"xmlhttprequest","Content-Type":"application/json"},body:JSON.stringify(t)}).then(e=>e.json())}function m(e){return e.preventDefault(),function(e,t,o){var n=(o=o||{}).expires;if("number"==typeof n&&n){var l=new Date;l.setTime(l.getTime()+1e3*n),n=o.expires=l}n&&n.toUTCString&&(o.expires=n.toUTCString());t=encodeURIComponent(t);var c=e+"="+t;for(var r in o){c+="; "+r;var i=o[r];!0!==i&&(c+="="+i)}document.cookie=c}("cookielaw","1",{expires:94608e3,path:"/"}),n("#cookie-law").style.display="none",!1}},function(e,t,o){},function(e,t,o){},function(e,t,o){}]);