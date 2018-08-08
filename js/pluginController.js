
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


  var tl =  new TimelineMax({repeat:-1});
  mySplitText = new SplitText("#txt", {type:"words,chars"}), 
  chars = mySplitText.chars;
  tl.staggerFrom(chars,0.01, {opacity:0, ease:Power1.easeIn}, 0.08, "+=0.1");

   tl.timeScale(1);


$('.fliter-button li').click(function() {
  $(this).addClass('active-f').siblings('li').removeClass('active-f');
})

