function slider(x) {
    if (x.matches)
        {
            const swiperC = new Swiper('.swiper', {
                loop: true,
                effect: "coverflow",
                grabCursor: true,
                centeredSlides: true,
                slidesPerView: "1",
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
            });
        }
    else {
        const swiperP = new Swiper('.swiper', {
            loop: true,
            effect: "coverflow",
            grabCursor: true,
            centeredSlides: true,
            slidesPerView: "2",
            coverflowEffect: {
                rotate: 15,
                stretch: 0,
                depth: 325,
                modifier: 2,
                slideShadows: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });
    }
}

var x = window.matchMedia("(max-width: 1255.56px)");

slider(x);

x.addEventListener("change", function() {
    slider(x);
  });