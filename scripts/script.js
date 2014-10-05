$(document).ready(function(){
	$('#changeColour').click(function(e){
			var color = '#' + Math.floor(Math.random() * 16777215).toString(16);
			console.log('Switching colour to: ' + color);
			$(document.body).animate({backgroundColor: color}, 'slow');
		});
});