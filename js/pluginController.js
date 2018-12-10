
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



$('.fliter-button li').click(function() {
  $(this).addClass('active-f').siblings('li').removeClass('active-f');
})





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
          slidesPerView: 1,
          spaceBetween: 30,
        },
        640: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        320: {
          slidesPerView: 1,
          spaceBetween: 10,
        }
      }
  });


  var mySplitText = new SplitText("#text", {
      type: "chars"
    }),

    tl = new TimelineLite(),
    numWords = mySplitText.words.length;



  tl.staggerFrom(mySplitText.chars, 1.5, {
    opacity: 0,
   yPercent: 80,
    ease: Elastic.easeOut.config(1, 0.75)
   
  }, '0.1');

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