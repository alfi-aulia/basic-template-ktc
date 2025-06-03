let cart = document.querySelector('.shopping-cart');

document.querySelector('#cart').onclick = () =>{
    cart.classList.toggle('active');
    login.classList.remove('active')
}

let login = document.querySelector('.login-form');

document.querySelector('#login').onclick = () =>{
    login.classList.toggle('active');
    cart.classList.remove('active');
}

window.onscroll = () =>{
    cart.classList.remove('active');
    login.classList.toggle('active');
}

var swiper = new Swiper(".home-slider", {
    autoplay:{
        delay:7500,
        disableOnInteraction:false,
    },
    grabCursor:true,
    loop: true,
    centeredSlides:true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

let currentIndex = 0;
    const totalSlides = 6; // Jumlah slide
    
    function updateSlide(id) {
        const slider = document.getElementById(id);
        slider.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    function nextSlide(id) {
      currentIndex = (currentIndex + 1) % totalSlides;
      updateSlide(id);
    }

    function prevSlide(id) {
      currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
      updateSlide(id);
    }



