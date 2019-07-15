
$('.navbar-toggle').click(function() {
   $('.navbar-collapse').slideToggle();
})


  new WOW().init();




// expand 
var tl = new TimelineMax({ repeat: -1 });


tl.fromTo('#f_x5F_1, #f_x5F_2, #f_x5F_3, #f_x5F_4, #f_x5F_5, #f_x5F_5, #f_x5F_6, #f_x5F_7, #f_x5F_8, #f_x5F_9', 3, {
  rotation: 2, 
   transformOrigin: 'bottom',
    ease:Linear.easeNone
},

{
  rotation: -2,

  repeat: -1,
  
  yoyo: true,
  immediateRender:false,
   transformOrigin: 'bottom',
   ease:Linear.easeNone
}, '+=1');



TweenMax.fromTo('.bee', 1, {
 
 y: -5,
   x: -5,
  repeat: -1,
   yoyo: true,
},
{
 y: 10,
   x: 20,
  repeat: -1,
   yoyo: true,
   delay: 1,
 repeatDelay: 1,
})



TweenMax.fromTo('', 1, {
  rotation: -3,
  repeat: -1,
   yoyo: true,
    transformOrigin: 'bottom',
},
{
  rotation: 3,
  repeat: -1,
   yoyo: true,
   delay: 1,
 repeatDelay: 1,
  transformOrigin: 'bottom left',
})


var tl2 = new TimelineMax({ repeat: -1 });


tl2.fromTo('#gril-main', 1, {
  rotation: 2, 
   transformOrigin: 'center bottom',
    ease:Linear.easeNone
},

{
  rotation: -2,

  repeat: -1,
  
  yoyo: true,
  immediateRender:false,
   transformOrigin: 'center bottom',
   ease:Linear.easeNone
}, 0)

  







        Typed.new("#typed", {
            stringsElement: document.getElementById('typed-strings'),
            typeSpeed: 30,
            backDelay: 10,
            loop: true,
            cursorChar: '<img width="38" src="BeeFlying.gif">',

            contentType: 'html', // or text
            // defaults to null for infinite loop
            loopCount: null,


            // call when done callback function
              callback: function() { one() },


              // starting callback function before each string
              preStringTyped: function() { two() },


              //callback for every typed string
              onStringTyped: function() { three() },
              

              // callback for reset
              resetCallback: function() { four() }

        });



     function one() {
       console.log('one');
     }

    function two() {
       console.log('two');
     }

  function three() {
      // document.getElementById('typed')._typed.reset();
     }
  function four() {
       console.log('four');
     }

     $('a.page').click(function(){
         $('html, body').animate({
             scrollTop: $( $(this).attr('href') ).offset().top
         }, 2000);
         return false;
     });

var swiper = new Swiper('.swiper-container.products', {
    slidesPerView: 4,
    spaceBetween: 50,
    parallax: true,
    freeMode: true,
    grab:true,
      
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
     navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
       
        768: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 50,
        },
        320: {
          slidesPerView:2,
          spaceBetween: 10,
        }
      }
  });


 

 $('.drop').click(function () {
        $(this).toggleClass('open').siblings().removeClass('open');
    })

    $('.drop-menu li').each(function() {
    var delay = $(this).index() * 100 + 'ms';

    $(this).css({
        '-webkit-transition-delay': delay,
        '-moz-transition-delay': delay,
        '-o-transition-delay': delay,
        'transition-delay': delay
    });                  
});


  $('.wow.fadeInUp').each(function(a) {
    $(this).attr('data-wow-delay', `${(a / 10) * 1.5}s`);
  });
      

var swiper = new Swiper('.swiper-loop', {
    loop: true,
     autoplay: {delay: 1, },
    freeMode: true,
    speed: 5000,

      slidesPerView: 4,
      spaceBetween: 30,


    });


// var tlFirstScroll = new TimelineMax();


// tlFirstScroll
// .staggerFrom('#main-line', 10, { drawSVG:1 });


// var controller = new ScrollMagic.Controller();


// var scene1 = new ScrollMagic.Scene({
//   triggerElement:  '#footer',
//   triggerHook: 0,
//   duration: '100%' 
// })

// .setTween(tlFirstScroll)
// .addTo(controller)

// .setPin('#footer')
// .addTo(controller);

var tlmorph = new TimelineMax();


// tlmorph.to('svg', 1, {morphSVG:"#tab-device"}, "+=1")

var swiperdevice = new Swiper('.swiper-container.device-slider', {
      speed: 600,
      parallax: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });





      