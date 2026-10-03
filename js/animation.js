(function ($) {
    "use strict";
    console.clear();

    // button animation
    $(".anm-position-aware")
        .on("mouseenter", function (e) {
            var parentOffset = $(this).offset(),
                relX = e.pageX - parentOffset.left,
                relY = e.pageY - parentOffset.top;
            $(this).find(".bg").css({ top: relY, left: relX });
        })
        .on("mouseout", function (e) {
            var parentOffset = $(this).offset(),
                relX = e.pageX - parentOffset.left,
                relY = e.pageY - parentOffset.top;
            console.log(relX, relY);
            $(this).find(".bg").css({ top: relY, left: relX });
        });

    // button style 3
    // $(".anm-reveal-text").on("mouseenter", (e) => {
    //   let btn = $(".anm-reveal-text");

    //   // Create a new SplitText instance on mouse enter
    //   let textSplit = new SplitText(btn, {
    //     type: "words,chars,lines",
    //   });

    //   let btnTimeline = gsap.timeline({
    //     scrollTrigger: {
    //       trigger: btn,
    //     },
    //   });

    //   // Animate lines moving down
    //   btnTimeline
    //     .fromTo(
    //       textSplit.lines,
    //       {
    //         y: 0,
    //         opacity: 1,
    //         ease: "sine.out",
    //       },
    //       {
    //         y: 40,
    //         opacity: 0,
    //         duration: 0.4,
    //         ease: "sine.out",
    //         onComplete: () => {
    //           textSplit.revert();
    //         },
    //       }
    //     ).fromTo(
    //       textSplit.chars,
    //       {
    //         y: -20,
    //         duration: 0.4,
    //         opacity: 0,
    //         ease: "sine.out",
    //         stagger: 0.1,
    //       },
    //       {
    //         y: 0,
    //         duration: 0.4,
    //         opacity: 1,
    //         ease: "sine.out",
    //         stagger: 0.1,
    //       }
    //     );
    // });

    $(".anm-reveal-text .text").each(function () {
        let $btn = $(this);

        let charSplit = new SplitText($btn[0], {
            type: "chars, lines",
            linesClass: "line",
            charsClass: "char",
        });

        $(charSplit.chars).each(function (index, element) {
            $(element).css({
                animationDelay: 0.3 + 0.02 * index + "s",
            });
        });
    });

    // heading animation
    $(".anm-lg-heading-reveal").each(function () {
        let $heading = $(this);

        let charSplit = new SplitText($heading[0], {
            type: "chars, words, lines",
            linesClass: "line",
            charsClass: "char",
        });

        gsap.from(charSplit.chars, {
            scrollTrigger: {
                trigger: $heading[0],
                toggleActions: "restart none none none",
            },
            y: 140,
            stagger: 0.06,
            duration: 1,
            ease: "back.inOut",
        });
    });

    $(".anm-sm-heading-reveal").each(function () {
        let $heading = $(this);

        let charSplit = new SplitText($heading[0], {
            type: "words, lines",
            linesClass: "line",
            wordsClass: "words",
        });

        gsap.from(charSplit.lines, {
            scrollTrigger: {
                trigger: $heading[0],
                toggleActions: "restart none none none",
            },
            perspective: "2000px",
            rotateX: "-120deg",
            translateY: "90px",
            stagger: 0.5,
            duration: 1,
            ease: "back.inOut",
        });
    });

    $(".anm-sm-heading-fade-left").each(function () {
        let $heading = $(this);

        let charSplit = new SplitText($heading[0], {
            type: "words,chars",
        });

        gsap.from(charSplit.chars, {
            scrollTrigger: {
                trigger: $heading[0],
                toggleActions: "restart none none none",
            },
            opacity: 0,
            x: 10,
            stagger: 0.02,
            duration: 1,
            ease: "sine.inOut",
        });
    });

    $(".anm-pera-fade").each(function () {
        let $heading = $(this);

        let charSplit = new SplitText($heading[0], {
            type: "lines",
        });

        gsap.from(charSplit.lines, {
            scrollTrigger: {
                trigger: $heading[0],
                toggleActions: "restart none none none",
            },
            opacity: 0,
            y: 20,
            stagger: 0.08,
            duration: 1.2,
            ease: "back.inOut",
        });
    });

    $(".anm-pera-scrub").each(function () {
        let $headingWrapper = $(this);
        let $heading = $(this).find(".anm-pera-scrub-title");

        let charSplit = new SplitText($heading[0], {
            type: "words, chars",
        });

        gsap.from(charSplit.chars, {
            scrollTrigger: {
                trigger: $headingWrapper[0],
                scrub: 5,
                pin: true,
                start: "top top+=200px",
            },
            opacity: 0.3,
            stagger: 0.1,
            duration: 0.5,
            ease: "back.inOut",
        });
    });

    // image animation
    $(".anm-image-fade-left").each(function () {
        let $imageConatiner = $(this);
        let $reveal = $imageConatiner.find(".reveal");

        gsap.to($reveal[0], {
            scrollTrigger: {
                trigger: $imageConatiner[0],
                toggleActions: "restart none none none",
            },
            x: "100%",
            duration: 1.2,
            ease: "power2.outIn",
        });
    });

    $(".anm-image-fade-scale").each(function () {
        let $imageConatiner = $(this);
        let $image = $imageConatiner.find("img");
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: $imageConatiner[0],
                toggleActions: "restart none none none",
            },
        });

        tl.from($imageConatiner[0], {
            scale: 1,
            y: 100,
            duration: 2,
            ease: "power2.outIn",
        }).from(
            $image[0],
            {
                scale: 1.3,
                opacity: 0,
                duration: 2,
                ease: "power2.outIn",
            },
            "<"
        );
    });

    $(".anm-image-paralax").each(function () {
        let $image = $(this);

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: $image[0],
                scrub: true,
                pin: false,
            },
        });

        tl.to($image[0], {
            backgroundPosition: "100% 110%",
            duration: 1,
            ease: "none",
        });
    });

    // smooth scroll
    const smoother = ScrollSmoother.create({
        content: "#scrollsmoother-container",
        smooth: 3,
        normalizeScroll: true,
        ignoreMobileResize: true,
        effects: true,
    });

    //  anm-section-testimonial

    const testimonialTimeline = gsap.timeline({
        scrollTrigger: {
            trigger: "anm-section-testimonial",
            scrub: 1,
            start: "top top",
            pin: false,
        },
    });

    testimonialTimeline.to(".testimonial-5-item", {
        x: -200,
        duration: 1,
        ease: "none",
    });

    // faq card
    $(".faq-cards").each(function () {
        const $cardWrapper = $(this);
        const $cards = $cardWrapper.find(".faq-card");

        const cardTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: $cardWrapper[0],
                scrub: 1,
                start: "top top+=300px",
                pin: true,
            },
        });

        $cards.each(function (index, card) {
            if (index > 0) {
                cardTimeline.fromTo(
                    card,
                    {
                        y: `${100 * index}%`,
                        duration: 1,
                    },
                    {
                        y: `${30 * index}px`,
                        duration: 1,
                    }
                );
            }
        });
    });
})(jQuery);
