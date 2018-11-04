
		
var rangeSlider = function() {
  var slider = $('.range-slider'),
      range = $('.range-slider__range'),
      value = $('.range-slider__value');
    
  slider.each(function(){

    value.each(function(){
      var value = $(this).prev().attr('value');
      $(this).html(value);
    });

    range.on('input', function(){
      $(this).next(value).html(this.value);
    });
  });
};

rangeSlider();
var activeEffect = null;

function toggleShape(name) {
	$('.bee-shape > svg').hide();
	activeEffect = $('.' + name).show();
}

$('#shape-selector').change(function() {
	toggleShape($(this).val());
}).trigger('change');



$(document).on('input', '#heightSlider', function() {
   $('.bee-shape > svg').css('height', $(this).val() + 'px' );
});

$(document).on('input', '#widthSlider', function() {
   $('.bee-shape > svg').css('width', $(this).val() + '%' );
});

$(document).on('input', '#canvasHeight', function() {
   $('.hero').css('height', $(this).val() + 'px' );
});

$('#canvasColor').change(function() {
	 $('.hero').css('background-color', $(this).val() );
});


$('#getCode').click(function () {
	$('.bee-shape')
});

// modal 

$(".modal-trigger").click(function(e){
  e.preventDefault();
  dataModal = $(this).attr("data-modal");
  $("#" + dataModal).css({"display":"block"});
  // $("body").css({"overflow-y": "hidden"}); //Prevent double scrollbar.
  // console.log(activeEffect);
  var clonedCanvas = $('.hero').clone();
  clonedCanvas.find('.bee-shape').html(activeEffect);

  var a = $('<div />',{html:clonedCanvas}).html();
  $('#temp').text(a);
});

$(".close-modal, .modal-sandbox").click(function(){
  $(".modal").css({"display":"none"});
  // $("body").css({"overflow-y": "auto"}); //Prevent double scrollbar.
});

$('.top-btn button').click(function() {
	$(this).addClass('active').siblings('button').removeClass('active');
	var valu = $(this).attr('data-pos');

	$('.bee-shape').removeClass('bee-shape-bottom');
	$('.bee-shape').removeClass('bee-shape-top');
	$('.bee-shape').addClass(valu);
	
});