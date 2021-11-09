$(document).ready(function() {
    $('.suggest__slider').slick({
        slidesToShow: 4,
        slidesToScroll: 4,

        responsive: [
            {
                breakpoint: 1068,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    dots: true,
                }
            },
            {
                breakpoint: 680,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                }
            }
        ]
    });
    $('.header__burger').click(function() {
        $('.header__burger, .header__mobile, body').toggleClass('active');
    });

    let header = $(".header");
    let headerBody = $(".hero");
    let headerBodyH = headerBody.innerHeight();
    let scrollPos = $(window).scrollTop()

    $(window).on("scroll load resize", function () {
        headerBodyH = headerBody.innerHeight();
        scrollPos = $(this).scrollTop();

        if (scrollPos > headerBodyH) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }

    });

    /* Анимации */
    const animItems = document.querySelectorAll('._anim-items');

    if (animItems.length > 0) {
        window.addEventListener('scroll', animOnScroll);
        function animOnScroll() {
            for (let index = 0; index < animItems.length; index++) {
                const animItem = animItems[index];
                const animItemHeight = animItem.offsetHeight;
                const animItemOffset = offset(animItem).top;
                const animStart = 4;

                let animItemPoint = window.innerHeight - animItemHeight / animStart;

                if (animItemHeight > window.innerHeight) {
                    let animItemPoint = window.innerHeight - window.innerHeight / animStart;
                    
                }

                if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
                    animItem.classList.add('_active');
                }else {
                    if (!animItem.classList.contains('_anim-no-hide')) {
                        animItem.classList.remove('_active');
                    }
                }
            }
        }
        function offset(el) {
            const rect = el.getBoundingClientRect(),
                scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
                scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
        }
    }
    setTimeout(() => {
        animOnScroll();
    }, 300);
})