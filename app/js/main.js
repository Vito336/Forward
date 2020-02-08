$(function () {

	$('.reviews-slider').slick({
		infinite: true,
		prevArrow: '<img class="slider-arrows slider-arrows__left" src="images/slider-arrows-left.svg" alt=""></img>',
		nextArrow: '<img class="slider-arrows slider-arrows__right" src="images/slider-arrows-right.svg" alt=""></img>',
		dots: true,
		dotsClass: 'slider-dots'
	});

	$(document).ready(function () {
		$("#arrow-top").on("click", "a", function (event) {
			event.preventDefault();
			var id = $(this).attr('href'),
				top = $(id).offset().top;
			$('body,html').animate({ scrollTop: top }, 500);
		});
	});

});