lightbox.option({showImageNumberLabel: false})

$(".js-silky-smooth").on("click", "a", function() {
    return $("html, body").animate({
        scrollTop: $($.attr(this, "href")).offset().top
    }, 500)
});

$('.map-container')
	.dblclick(function(){
			$(this).find('iframe').addClass('clicked')})
	.mouseleave(function(){
			$(this).find('iframe').removeClass('clicked')});


/*$('.parallax-window').parallax({
    naturalWidth: 1400,
    naturalHeight: 900,
    imageSrc: '/images/reviews.jpg'
});*/