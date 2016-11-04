var club_layer_count ={
	"cephid": 2,
	"torque": 2,
	"infero": 2,
	"kludge": 1,
	"equilibria": 1,
	"robotics": 2,
	"electronika": 2,
	"ecell": 1,
	"infi": 3,
};

var device_width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
var device_height = (window.innerHeight > 0) ? window.innerHeight : screen.height;

$(document).ready(function() {


	if(device_width <= 768){
		$('.dummy-hexagon-in2').each(function(){
			$(this).parent().parent().parent().remove();
		});
	}
	
	$(".club_name").unbind().click(function(){
		var club_name = $(this).attr('data-club');
		var layer_count = club_layer_count[club_name];
		if($('.'+club_name+'-layer1').is(':visible')){
			for(var i=1 ; i<= layer_count ; i++) {
				$('.'+club_name+'-layer'+i).stop(true,true).fadeOut({duration:500,queue:false}).slideUp(500);
			}
		} else {
			for(var i=1 ; i<= layer_count ; i++) {
				$('.'+club_name+'-layer'+i).stop(true,true).fadeIn({duration:500,queue:false}).css('display','none').slideDown(500);
			}
		}

		$('html,body').animate({ scrollTop: $("#"+club_name+"-container").offset().top}, 'ease-in-out');

	});

});