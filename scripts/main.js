'use strict';
window.$ = require('jquery');
window.jQuery = $;


$(document).ready(function() {
	var $orderAmount = $('#orderAmount');
	var $state = $('#state');
	var $button = $('#button');
	var $total = $('.total');


	$button.on('click', function(e){
		e.preventDefault();
		var $order = $orderAmount.val();
		var $location = $state.val();
		$total.text($order);

		if($location.toUpperCase() === 'WI'){
			var newAmount = (parseFloat($order * 1.055));
			$total.text(Math.ceil(newAmount * 100)/100);
		}

	})


})