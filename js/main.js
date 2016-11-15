$(document).ready(function() {
	$(".button-collapse").sideNav();
	$("#slide-out").append($("#navbar-collapse ul").html());
	$(window).scroll(function(){
	    var fromTopPx = 200; // distance to trigger
	    var scrolledFromtop = jQuery(window).scrollTop();
	    if(scrolledFromtop > fromTopPx){
	        $('#navbar-top, #navbar-collapse').addClass('scrolled');
	    }else{
	        $('#navbar-top, #navbar-collapse').removeClass('scrolled');
	    }
	});
});
