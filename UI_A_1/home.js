var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1.5,
    centeredSlides: true,
    spaceBetween: 15,
    autoplay:{
        delay:4000,
        disableOnlnteraction:false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    loop:true,
    speed: 800,
  });