Element.prototype.remove = function() {
    this.parentElement.removeChild(this);
}
NodeList.prototype.remove = HTMLCollection.prototype.remove = function() {
    for(var i = this.length - 1; i >= 0; i--) {
        if(this[i] && this[i].parentElement) {
            this[i].parentElement.removeChild(this[i]);
        }
    }
}

window.onload = function() {
	document.getElementById("pre-loader").remove();
	if(typeof afterLoad === "function") afterLoad();
}

$(document).ready(function() {
	$(".button-collapse").sideNav();
	// $("#slide-out").append($("#navbar-collapse ul").html());
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
