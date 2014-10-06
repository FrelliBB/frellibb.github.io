$(document).ready(function(){
	$('#changeColour').click(function(){
			var color = '#' + Math.floor(Math.random() * 16777215).toString(16);
			$(document.body).animate({backgroundColor: color}, 'slow');
		});
});