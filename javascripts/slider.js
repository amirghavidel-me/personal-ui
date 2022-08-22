var swiper = new Swiper(".mySwiper", {
     slidesPerView: "auto",
     autoplay: {
          delay: 1200,
          disableOnInteraction: false,
        },
        parallax: true,
        loop:true,
     pagination: {
       el: ".swiper-pagination",
     },
   });