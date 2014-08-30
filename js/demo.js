window.onload = function() {
	
	$('body').on('click', function() {
		moveIn('');
	} );
	
}

function moveIn( img ) {
	
	// start movein with a few vibras
	
	navigator.vibrate([50, 100, 50]);
	
	// animate first movein
	setTimeout( function() {
		var i = $('<img>', { src: 'images/grumpy.png'} );
		
		i.hide();
		
		$('body').prepend( i );
		
		i.show('slide', 'slow');
		
		i.on('click', function( e) {
			i.hide('slide', 'fast', function() {
				i.remove();
			});
			
			e.stopPropagation();
		});
		
	}, 1750 );
	
}