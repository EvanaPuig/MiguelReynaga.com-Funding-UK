$(document).ready(function() {	
		"use strict";
		$("#owl-demo-testimonial").owlCarousel({
 
		autoPlay: 4000, //Set AutoPlay to 3 seconds
		
      items : 1,
	navigation : true
  });
	$("#blog-content").owlCarousel({
      items : 1,
		
  });
  $("#events-content").owlCarousel({
      items : 1,
	navigation : true	
  });
  $("#care-content").owlCarousel({
      items : 1,
	navigation : true	
  });
 }); 