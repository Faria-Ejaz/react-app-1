(function ($) {
    "use strict";

    $(document).ready(function($){

    	$('.video-filter ul li a').on('click', function(){
    		$('.video-filter ul li a').removeClass('active');
    		$(this).addClass('active');
    		return false;
    	});

    });
    
}(jQuery)); 