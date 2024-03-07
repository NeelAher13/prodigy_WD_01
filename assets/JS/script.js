// #show menu

const showMenu = (toggleId,navId) =>{
    const toggle = document.getElementById(toggleId);
    nav = document.getElementById(navId);


    if(toggle && nav){
        toggle.addEventListener('click',()=>{
            nav.classList.toggle('show-menu');
        })
    }
}
showMenu('nav-toggle','nav-menu')






// POP JS
const btnOpenVideo = document.querySelectorAll('.islands_video-content')
const islandsPopup = document.getElementById('popup')

function popUp(){
    islandsPopup.classList.add('show-popup')
}
btnOpenVideo.forEach(b => b.addEventListener('click',popUp))

const btnCloseVideo = document.getElementById('popup-close')

btnCloseVideo.addEventListener('click',()=>{
    islandsPopup.classList.remove('show-popup')
})

// SWIPER JS

var swiper = new Swiper(".mySwiper", {
    spaceBetween: 0,
    slidesPerView: 0,
    
  });
  var swiper2 = new Swiper(".mySwiper2", {
    effect:'fade',
    thumbs: {
      swiper: swiper,
    },
  });

//   CONTROLS ANIMATION
const controllimg =  document.querySelectorAll('.controls_img');

function ScrollAnimation(){
  gsap.from('.islands_subtitle',{opacity:0,duration:.2,delay:.5,y: -20});
  gsap.from('.islands_title',{opacity:0,duration:.2,delay:.6,y: -20});
  gsap.from('.islands_description',{opacity:0,duration:.2,delay:.8,y: -20});
  gsap.from('.islands_button',{opacity:0,duration:.2,delay:.7,y: -20});
  gsap.from('.islands_video-content',{opacity:0,duration:.2,delay:.7,y: -20});

  // islandsPopup.classList.remove('show-popup');
}
controllimg.forEach(c => c.addEventListener('onchange',ScrollAnimation))