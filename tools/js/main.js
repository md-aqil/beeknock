(function() {
	var img = $('.image'),
        filterBox = $('#valu-box');
    var defaults = {
        grayscale : 0,
        blur : 0,
        brightness : 100,
        contrast : 100,
        'hue-rotate': 0,
        opacity : 100,
        invert : 0,
        saturate : 100,
        sepia : 0
    }

    var reader = new FileReader();

    reader.addEventListener('load', function() {
        img.css({'background-image': 'url(' + this.result + ')' });
    })


    function printFilterValue(data) {
        // console.log(data);
        filterBox.empty();
        $.each(data, function(k, v) {
            if(defaults[k] == v) return;
            var p = $('<p/>',{text: `${k} :- ${v}`});
            filterBox.append(p);
        });
    }


    // Select new image
    $('#input-choose-file').change(function() {
        var file = this.files[0];
        reader.readAsDataURL(file);
    })

    // On close image
    $('a.btn-image-close').click(function(e) {
        e.preventDefault();
        img.css({'background-image': 'none'})
    });

	// filters
	$('[data-filter]').click(function() {
		var filterValue = img.attr('data-filter', $(this).data('filter'));
        console.log('a');
        printFilterValue();
	});
	
	// Color

	$('.select-color').change(function() {
		img.css({'background-color': $(this).val()});
	})

	$('.blend-select').change(function() {
		img.css({'background-blend-mode': $(this).val()});
	})
		
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

		//on click of go(submit) button, addImage() will be called
$("#go").click(addImage);

//on pressing return, addImage() will be called
$("#urlBox").submit(addImage);


// editing image via css properties
function editImage() {
    var filter = {
        grayscale: $("#gs").val(), // grayscale
        blur: $("#blur").val(), // blur
        brightness: $("#br").val(), // brightness
        contrast: $("#ct").val(), // contrast
        'hue-rotate': $("#huer").val(), //hue-rotate
        opacity: $("#opacity").val(), //opacity
        invert: $("#invert").val(), //invert
        saturate: $("#saturate").val(), //saturate
        sepia: $("#sepia").val(), //sepia
    }
    var filterStyle = '';
    $.each(filter, function(k, v) {
        var param = '%';
        if(k == 'hue-rotate') param = 'deg';
        if(k == 'blur') param = 'px';
        filterStyle += k + '(' + v + param +') ';
    });
    $("#imageContainer .image").css('filter', filterStyle);
    $("#imageContainer .image").css('-webkit-filter', filterStyle);
    printFilterValue(filter);
}

//When sliders change image will be updated via editImage() function
$("input[type=range]").change(editImage).mousemove(editImage);

// Reset sliders back to their original values on press of 'reset'
$('#imageEditor').on('reset', function () {
	resetFilter();
	setTimeout(function() {
		editImage();
	}, 0);
});

function resetFilter() {
	img.removeAttr('data-filter');
}

// adding an image via url box
function addImage(e) {
	var imgUrl = $("#imgUrl").val();
	if (imgUrl.length) {
		$("#imageContainer img").attr("src", imgUrl);
	}
	e.preventDefault();	
}

$(document).ready(function() {
    $("#lightSlider").lightSlider({
        autoWidth: true,
        slideMove: 1, // slidemove will be 1 if loop is true
        slideMargin: 10,
        adaptiveHeight: true,
        auto: true,
        addClass: '',
        mode: "slide",
        useCSS: true,
        cssEasing: 'ease', //'cubic-bezier(0.25, 0, 0.25, 1)',//
        easing: 'linear', //'for jquery animation',////
 
        speed: 400, //ms'
        auto: false,
        loop: false,
        slideEndAnimation: true,
        pause: 2000,
 
        keyPress: false,
        // controls: true,
        prevHtml: '',
        nextHtml: '',
 
        rtl:false,
        adaptiveHeight:false,
 
        vertical:false,
        verticalHeight:500,
        vThumbWidth:100,
        thumbItem:10,
        pager: false,
        gallery: false,
        galleryMargin: 5,
        thumbMargin: 5,
        currentPagerPosition: 'middle',
        enableTouch:true,
        enableDrag:true,
        freeMove:true,
        swipeThreshold: 40,
        responsive : [],
        onBeforeStart: function (el) {},
        onSliderLoad: function (el) {},
        onBeforeSlide: function (el) {},
        onAfterSlide: function (el) {},
        onBeforeNextSlide: function (el) {},
        onBeforePrevSlide: function (el) {}
    });
});
    var filters = $('.insta-example [class*="filter"]');
  
    filters.click(function()  {
       $('.image').attr('data-filter', $(this).data('filter'));
    });
})();

