(function() {

  // define variables
  var items = document.querySelectorAll(".timeline li");

  // check if an element is in viewport
  // http://stackoverflow.com/questions/123999/how-to-tell-if-a-dom-element-is-visible-in-the-current-viewport
  function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  // document.querySelector(".teamline").style.visibility = "hidden";

  function callbackFunc() {
    for (var i = 0; i < items.length; i++) {
      if (isElementInViewport(items[i])) {
        items[i].classList.add("in-view");
      }
    }
	if (document.documentElement.clientWidth > 600) {
	  for (var i = 0; i<items.length; i++)
	  {
		  items[i].style.transform = "translateY(" + -Math.floor((i+1)/2)*100 +"%)";
		//   items[i].style.marginBottom = -Math.floor((i)/2)*items[i].offsetHeight + "px";
	  }
	//   document.querySelector(".teamline").style.marginBottom = (-Math.ceil(items.length/4)*items[0].offsetHeight+500)+"px";
	  // document.getElementsByClassName(".teamline")[0].style.margin = -Math.floor((i-1)/2)*200 + "px";
	}
	else {
	  for (var i = 0; i<items.length; i++)
  	  {
  		  items[i].style.transform = "none";
  	  }
	}
  }



  // listen for events
  window.addEventListener("load", callbackFunc);
  window.addEventListener("resize", callbackFunc);
  window.addEventListener("scroll", callbackFunc);

})();
