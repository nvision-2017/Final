var device_width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
var device_height = (window.innerHeight > 0) ? window.innerHeight : screen.height;
var last_open;

$(document).ready(function() {

	if(device_width <= 768){
		$('.dummy-hexagon-in2').each(function(){
			$(this).parent().parent().parent().remove();
		});
	}
	
	$(".club-container").unbind().click(function(){

		var club_name = $(this).attr('data-club');
		var check = $('.'+club_name+'-layer').is(':visible');

		$('.'+last_open+'-layer').hide();
		$("."+last_open+"-helper").show();

		if(!check){
			$('.'+club_name+'-layer').stop(true,true).fadeIn({duration:500,queue:false}).css('display','none').slideDown(500);
			$("."+club_name+"-helper").stop(true,true).hide();
			last_open = club_name;
		}

		$('html,body').animate({ scrollTop: $("#"+club_name+"-container").offset().top - 180}, 'ease-in-out');

	});

});