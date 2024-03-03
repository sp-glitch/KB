const MAIN_SLIDE = new Swiper(".main_slide", {
  loop: true,
  speed: 1000,
  effect: 'fade',
  autoplay: {
    delay: 4500,
    disableOnInteraction: false,
  },

  pagination: {
    el: ".main_slide .swiper-pagination",
    clickable: true,
  },

  slideActiveClass: "on",

});

const MAIN_SLIDE_LEFT_BUTTON = document.querySelector(
  ".main_slide .arrows .left"
);
const MAIN_SLIDE_RIGHT_BUTTON = document.querySelector(
  ".main_slide .arrows .right"
);

MAIN_SLIDE_LEFT_BUTTON.addEventListener("click", () => {
  MAIN_SLIDE.slidePrev(1000);
});
MAIN_SLIDE_RIGHT_BUTTON.addEventListener("click", () => {
  MAIN_SLIDE.slideNext(1000);
});

const MAIN_SUGGEST = new Swiper(".suggest_slide", {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 30,
  pagination: {
    el: ".suggest_slide .swiper-pagination",
    clickable: true,
  },


  breakpoints: {
    1220: {
      slidesPerView: 2,
    }
  },

  breakpoints: {
    768: {
      slidesPerView: 3,
    }
  },
});

const MAIN_SUGGEST_LEFT_BUTTON = document.querySelector(
  ".MainSuggest .arrows .left"
);
const MAIN_SUGGEST_RIGHT_BUTTON = document.querySelector(
  ".MainSuggest .arrows .right"
);

MAIN_SUGGEST_LEFT_BUTTON.addEventListener("click", () => {
  MAIN_SUGGEST.slidePrev(1000);
});
MAIN_SUGGEST_RIGHT_BUTTON.addEventListener("click", () => {
  MAIN_SUGGEST.slideNext(1000);
});

$(function () {
  $(window).on("scroll", function () {
    const sct = $(window).scrollTop();
    if (sct > 0) {
      $(".header_bottom").addClass("on");
    } else {
      $(".header_bottom").removeClass("on");
    }
  });

  const tabBtn = $(".tab_btn>li");
  const tabCont = $(".tab_cont>div");
  tabCont.hide().eq(0).show();

  tabBtn.on("click", function (e) {
    e.preventDefault();
    const index = $(this).index();

    $(this).addClass("active").siblings().removeClass("active");
    tabCont.eq(index).show().siblings().hide();
  });

  $('.menu_bar').on('click', function () {
    $('.gnb').toggleClass('on');
  });

  $('.gnb>ul>li>a').on('click', function (e) {
    if ($('.gnb').hasClass('on')) {
      e.preventDefault();
      $(this)
        .next()
        .stop()
        .slideToggle()
        .parent()
        .siblings()
        .find('.sub_menu')
        .stop()
        .slideUp();
    }
  });
});
