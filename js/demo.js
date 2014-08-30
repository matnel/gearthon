window.onload = function() {
	
	$('body').on('click', function() {
		character('images/grumpy.png', 'I need to sleep more to be less grumpy!');
	} );
	
}

function character( img, text ) {
	
	// start movein with a few vibras
	
	navigator.vibrate([50, 100, 50]);
	
	// animate first movein
	setTimeout( function() {
		
		var div = $('<div>');
		
		// content
		var i = $('<img>', { src: img, height: 175 } );
		div.append( i );
		
		if( text ) {
			
			var span = $('<span>', { html: text } );
			span.css('background', 'black');
			span.css('padding', 3 );
			
			
			div.append( '<br/>' );
			div.append( span );
		
		};
		
		// show element
		div.hide();
		$('body').prepend( div );
		div.show('slide', 'slow');
		
		
		// hide the element after click
		div.on('click', function( e ) {
			
			div.hide('slide', 'fast', function() {
				div.remove();
			});
			
			e.stopPropagation();
		});
		
	}, 1750 );
	
}