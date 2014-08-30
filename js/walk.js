window.onload = function() {
	
	/** var sensor = window.webapis.motion;
	
	sensor.start( 'PEDOMETER',
		function onSuccess( data ) {
			console.log( data );
		}
	); **/
	
	window._health = 100;
	
	
	window.ondevicemotion = function( data ) {
		var sum = 0;
		sum += Math.abs( data.acceleration.x );
		sum += Math.abs( data.acceleration.y );
		sum += Math.abs( data.acceleration.z );
		
		
		if( sum > 15 ) {
			window._health -= 5;
			
			console.log( window._health );
			
			navigator.vibrate(500);
			
			
			$('#header').width( window._health + '%');
		}
	}
	
}

