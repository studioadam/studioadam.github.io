
$(document).ready(function() {
	
	// initialize fancybox
	$('.fancybox-button').fancybox({
		wrapCSS    : 'fancybox-custom',
		closeClick : true,

		openEffect : 'none',
		
		prevEffect		: 'none',
		nextEffect		: 'none',
		closeBtn		: false,

		helpers : {
			title : {
				type : 'inside'
			},
			overlay : {
				css : {
					'background' : 'rgba(238,238,238,0.85)'
				}
			},
			buttons	: {}
		}
	});


});