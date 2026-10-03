(function ($) {
  "use strict";
  console.clear();

  let device_width = window.innerWidth;
  var isMobile =
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Nokia|Opera Mini/i.test(
      navigator.userAgent
    )
      ? true
      : false;
  var agency = {
    /* Init */
    init() {
      agency.mobileMenu();
      agency.stickyHeader();
      agency.sidebarToggle();
      agency.slider();
      agency.marquee();
      agency.videoPopup();
      agency.counter();
    },

    marquee() {
      $(".marquee").marquee({
        speed: 70,
        gap: 69,
        delayBeforeStart: 0,
        direction: "left",
        duplicated: true,
        pauseOnHover: false,
        startVisible: true,
      });
    },
    sidebarToggle() {
      $(".hamburger").click(function () {
        $(".sidebar").addClass("open");
        $(".sidebar-overlay").addClass("open");
      });
      $(".sidebar-overlay,.close-icon").click(function () {
        $(".sidebar").removeClass("open");
        $(".sidebar-overlay").removeClass("open");
      });
    },
    videoPopup() {
      $(".video-popup").magnificPopup({
        type: "iframe",
        callbacks: {},
      });
    },
    stickyHeader() {
      $(window).scroll(function () {
        if ($(this).scrollTop() > 250) {
          $("#header-sticky").addClass("sticky");
        } else {
          $("#header-sticky").removeClass("sticky");
        }
      });
    },
    counter() {
      if ($(".count")) {
        $(".count").counterUp({
          delay: 15,
          time: 4000,
        });
      }
    },
    slider() {
      new Swiper(".testimonial-1-slider", {
        effect: "cards",
        grabCursor: true,
        navigation: {
          nextEl: ".testimonial-1-next",
          prevEl: ".testimonial-1-prev",
        },
      });
      new Swiper(".testimonial-slider-2", {
        navigation: {
          nextEl: ".testimonial-next",
          prevEl: ".testimonial-prev",
        },
      });
      new Swiper(".portfolio-3-slider", {
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        loop: true,
        slidesPerView: 2,
        pagination: {
          el: ".portfolio-slider-nav",
          type: "fraction",
          formatFractionCurrent: function (number) {
            return number < 10 ? "0" + number : number;
          },
          formatFractionTotal: function (number) {
            return number < 10 ? "0" + number : number;
          },
        },
        // effect: "creative",
        creativeEffect: {
          prev: {
            shadow: true,
            translate: ["-100%", 0, 100],
            zIndex: 2, // Make sure previous slide is on top
            scale: 1.2, // Scale up the previous slide for emphasis
          },
          next: {
            shadow: true,
            translate: ["115%", 0, -500],
            zIndex: 1, // Lower z-index for next slide
            scale: 1, // No scaling for the next slide
          },
        },
      });
    },
    mobileMenu() {
      $(".menu-bar").on("click", function () {
        $(".mobile_menu_content").addClass("opened");
        $(".body-overlay").addClass("apply");
      });
      $(".close_btn").on("click", function () {
        $(".mobile_menu_content").removeClass("opened");
        $(".body-overlay").removeClass("apply");
      });
      $(".body-overlay").on("click", function () {
        $(".mobile_menu_content").removeClass("opened");
        $(".body-overlay").removeClass("apply");
      });

      if ($("#navbarNav").length && $(".main-menu-mobile").length) {
        let navContent = document.querySelector("#navbarNav").outerHTML;
        let mobileNavContainer = document.querySelector(".main-menu-mobile");
        mobileNavContainer.innerHTML = navContent;

        let arrow = $(".main-menu-mobile .dropdown-nav > a");

        arrow.each(function () {
          let self = $(this);
          let arrowBtn = document.createElement("BUTTON");
          arrowBtn.classList.add("dropdown-toggle-btn");
          arrowBtn.innerHTML = "<i class='fas fa-angle-down'></i>";

          self.append(function () {
            return arrowBtn;
          });

          self.on("click", function (e) {
            e.preventDefault();
            let self = $(this);
            self.toggleClass("dropdown-opened");
            self.parent().toggleClass("expanded");
            self
              .parent()
              .parent()
              .addClass("dropdown-opened")
              .siblings()
              .removeClass("dropdown-opened");
            self.parent().children(".submenu").slideToggle();
          });
        });
      }
    },
  };
  $(document).ready(function () {
    agency.init();
  });
})(jQuery);
