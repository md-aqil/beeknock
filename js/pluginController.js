
$('.navbar-toggle').click(function() {
   $('.navbar-collapse').slideToggle();
})


  new WOW().init();



$('.t_g').wavify({
  height: 1000,
  bones: 6,
  amplitude: 30,
 
  speed: .25
});


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
            backDelay: 500,
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
       console.log('three');
     }
  function four() {
       console.log('four');
     }
