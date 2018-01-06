/*-----------------------------------
 header height
 -----------------------------------*/

$(document).ready(function() {   
     function setHeight() {
		 
         windowHeight = $(window).innerHeight();
         $('.static-header').css({
      "max-height": windowHeight+"px",
      "min-height": windowHeight+"px"
    });   
     };   
     setHeight();
     $(window).resize(function() {
		 "use strict";
         setHeight();   
     }); 
 });
