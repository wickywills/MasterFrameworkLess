
$(document).ready(function() {

	// Fancybox (http://fancyapps.com/fancybox/)
	$(".fancybox").fancybox();

	// Cycle (http://jquery.malsup.com/cycle/)
	$('#cycle').cycle({
        fx:     'fade',
        speed:  '1000',
        timeout: 3000,
        pager:  '#nav',
		slideExpr: 'img'
    });

});