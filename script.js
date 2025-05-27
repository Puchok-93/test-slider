var swiper1 = new Swiper(".swiper-1", {
  spaceBetween: 15,
  navigation: {
    nextEl: ".swiper-1 .swiper-button-next",
    prevEl: ".swiper-1 .swiper-button-prev"
  },
});

var swiper2 = new Swiper(".swiper-2", {
  slidesPerView: 6,
  slidesPerGroup: 6,
  spaceBetween: 15,
  direction: 'vertical',
  navigation: {
    nextEl: ".swiper-2 .swiper-button-next",
    prevEl: ".swiper-2 .swiper-button-prev"
  }
});

  // swiper2.on('slideChange', function () {
  //       swiper1.slideTo(this.activeIndex);
  //   });

  swiper2.on('click', (swiper, event) => {
      let index = swiper2.clickedIndex; // Получаем индекс кликнутого слайда
      console.log(index + 1, 'Индекс кликнутого слайда в боковом слайдере')
      swiper1.slideTo(index); // Перемещаем второй слайдер
  });
  swiper1.on('click', (swiper, event) => {
    let index = swiper1.clickedIndex; // Получаем индекс кликнутого слайда
    console.log(index + 1, 'Индекс кликнутого слайда в главном слайдере')
    swiper2.slideTo(index); // Перемещаем второй слайдер
  });