lightbox.option({showImageNumberLabel: false})

$(".js-silky-smooth").on("click", "a", function(event) {
	event.preventDefault();

	var elCoordinate = $($.attr(this, "href")).offset().top;
	
	if(elCoordinate > 700) {
		elCoordinate = elCoordinate - 55;
	}
    
    return $("html, body").animate({
        scrollTop: elCoordinate
    }, 500)
});

$('.map-container')
	.dblclick(function(){
			$(this).find('iframe').addClass('clicked')})
	.mouseleave(function(){
			$(this).find('iframe').removeClass('clicked')});


