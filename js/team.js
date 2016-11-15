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
	  for (var i = 1; i<items.length; i+=2)
	  {
		  items[i].style.marginTop = -items[i-1].offsetHeight+"px";
	  }
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
