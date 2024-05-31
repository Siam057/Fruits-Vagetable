// Swiper
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });


  // Menu bar

  let menu = document.querySelector('#menu_icon');
  let navbar = document.querySelector('.navbar')

  menu.onclick = () => {
    menu.classList.toggle('bx-x')
    navbar.classList.toggle('active');
  }

  window.onscroll = () => {
    menu.classList.remove('bx-x')
    navbar.classList.remove('active');
  }
