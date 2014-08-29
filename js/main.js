alert("loding main");

var i = 100;

var update = function () {
	
	// update the header bar
	
	i -= 5;
	
	$('#header').width( i + '%');
	
	
	// check for avatar color
	
	var a = $('#avatar');
	
	a.css("color", "blue");
};
