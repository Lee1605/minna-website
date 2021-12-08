import css from './style.css';

const burger = document.getElementById('burger');
const nav_bar_mobile = document.getElementById('nav-bar-mobile');
const close = document.getElementById('close');
const events = document.querySelector('.events-contain');
const contain = document.getElementById('contain');




burger.addEventListener('click',(event) => {
    // nav_bar_mobile.style.display = 'flex';
    nav_bar_mobile.style.width = '60vw';
    nav_bar_mobile.style.overflow = 'initial';
    nav_bar_mobile.style.border = '1px solid #e3f1f1';
    nav_bar_mobile.style.transition = 'all 0.3s ease-in';
});

close.addEventListener('click',(event) => {
    nav_bar_mobile.style.width = '0';
    nav_bar_mobile.style.overflow = 'hidden';
    nav_bar_mobile.style.border = 'none';
});

contain.addEventListener('click', (event) => {
  if(events.classList.contains('active')) {
    events.style.height = '3rem';
    events.style.overflow = 'auto';
    events.classList.remove('active');
    contain.style.color = '#DBCFBE';
  } else {
    events.style.height = '0';
    events.style.overflow = 'hidden';
    events.classList.add('active');
    contain.style.color = 'initial';
  }
})

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
  });

  const imgSwiper = new Swiper('.swiper.img-swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    autoplay: {
      delay: 4500,
      disableOnInteraction: false,
  },
    slidesPerView: 1,
    spaceBetween: 30,
    freeMode: true,
  
  });


