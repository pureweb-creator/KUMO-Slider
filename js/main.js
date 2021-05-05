$(document).ready(function(){
	$('.slider-for').slick({
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  arrows: false,
	  fade: true,
	  speed: 900,
	  asNavFor: '.slider-nav',
	  initialSlide: 1,
	  responsive: [
	    {
	      breakpoint: 600,
	      settings: {
	        initialSlide: 2,
	      }
	    }
	   ],
	  autoplay: true
	});
	$('.slider-nav').slick({
	  slidesToShow: 3,
	  initialSlide: 1,
	  slidesToScroll: 1,
	  asNavFor: '.slider-for',
	  dots: false,
	  arrows: false,
	  centerMode: true,
	  centerPadding: '20%',
	  focusOnSelect: true,
	  vertical: true,
	  verticalSwiping: true,
	  infinite: false,
	  swipeToSlide: true,
	  autoplay: true,
	  responsive: [
	    {
	      breakpoint: 600,
	      settings: {
	        slidesToShow: 2,
	        initialSlide: 2,
	      }
	    }
	   ]
	});
});


$('.slider-nav').on('afterChange', function(slick, currentSlide){ 

	var dataId = $('.slick-current').attr("data-slick-index"); // get only attr value
    var slideBefore = dataId - 2;
    var slideAfter = dataId + 2;

    if(dataId <= 6){
    	$(`.slider-nav .slick-slide[data-slick-index]`).css("opacity", "1");

    	$(`.slider-nav .slick-slide[data-slick-index=${slideBefore}]`).css("opacity", "0.3");
    	$(`.slider-nav .slick-slide[data-slick-index=${slideAfter}]`).css("opacity", "0.3");
    }
});