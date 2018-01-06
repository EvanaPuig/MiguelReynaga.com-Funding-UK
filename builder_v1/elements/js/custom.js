 "use strict";
/*-----------------------------------
 Quick Mobile Detection
 -----------------------------------*/

 var isMobile = {
    Android: function() {
     
      return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
    
      return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
     
      return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
     
      return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
     
      return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
     
      return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};


/*-- sticky nav resize --*/
			
			$(window).bind('scroll', function() {
				var navHeight = 1;
				if ($(window).scrollTop() > navHeight) {
                 $('.main-header').addClass('header-height2');
				}
				else {
					$('.main-header').removeClass('header-height2');
				}
			});
			/*-- onepage active menu --*/
			
			$('ul.menu li a').click(function() {
				var $this = $(this);
				$this.parent().siblings().removeClass('active').end().addClass('active');
    
			});

/*-----------------------------------
FUNFACTSs
-----------------------------------*/
$('.count').waypoint(function() {  
      // start all the timers
      $('.count').each(count);
      
      function count(options) {
	  
        var $this = $(this);
        options = $.extend({}, options || {}, $this.data('countToOptions') || {});
        $this.countTo(options);
      }
	}, {
	offset: '70%',  // middle of the page
	triggerOnce: true	
	});





