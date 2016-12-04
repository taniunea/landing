
// lightbox library

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


$(document).ready(function(){
	$(".js-search").on("submit", function(event){
		event.preventDefault();
		console.log("test");
		var searchWord = $(this).find("input").val();
		console.log(menuitems);
		console.log(searchWord);
		for ( var i = 0; i < menuitems.length; i++) {
			if (menuitems[i].item.toLowerCase() === searchWord.toLowerCase()){
				var searchCoordinate = $(menuitems[i].url).offset().top;
				console.log(searchCoordinate);
				return $("html, body").animate({
				    scrollTop: searchCoordinate
				}, 500)
			}
		}
	});
});