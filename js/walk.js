window.onload = function() {
	
	var sensor = window.webapis.motion;
	
	sensor.start( 'PEDOMETER',
		function onSuccess( data ) {
			console.log( data );
		}
	);

	
}