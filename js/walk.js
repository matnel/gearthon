window.onload = function() {
	
	
	
	
	
	
	
	// load and initialize
	
	console.log("let's load sensors");
	var sensor = window.webapis.motion;
	
	sensor.start( 'PEDOMETER',
			function onSuccess( data ) {
				console.log( data );
            }
        );

	
}