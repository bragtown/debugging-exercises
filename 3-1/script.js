$(document).ready(function() {

	var checkInt = setInterval(function() {

		var perc = Number($('.progress-bar').attr('aria-valuenow'));
		perc += (100-perc)/2;
		$('.progress-bar').attr('aria-valuenow', perc);
		if (perc > 99.99) {
			clearInterval(checkInt);
			$('.alert').show();
			return;
		}
		$('.progress-bar').css('width', perc+'%');
	}, 750);
});