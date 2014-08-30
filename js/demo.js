window.onload = function() {
	
	$('body').on('click', function() {
		character('images/grumpy.png', "<button class='btn'>Let's go joking</button>");
	} );
	
	
	window.ondevicemotion = function( data ) {
		var sum = 0;
		sum += Math.abs( data.acceleration.x );
		sum += Math.abs( data.acceleration.y );
		sum += Math.abs( data.acceleration.z );
		
		
		if( sum > 15 ) {
			$('.sam').hide( function() {
				$(this).remove();
			});
		}
	}
}

function character( img, text ) {
	
	// container for the avatar
	var div = $('<div>', { 'class': 'sam' });
	
	var hearts = $('<span>I love you too!</span>');
	hearts.hide();
	div.append( hearts );
	div.append( '<br/>' );
	
	// content
	var i = $('<img>', { src: img, height: 175 } );
	div.append( i );
	
	if( text ) {
		
		var span = $('<span>', { html: text } );
		span.css('background', 'black');
		span.css('padding', 7 );
		
		
		span.click( function( e ) {			
			e.stopPropagation();
		} );
		
		
		div.append( '<br/>' );
		div.append( span );
	
	};
	
	// show element
	div.hide();
	$('body').prepend( div );
	
	div.on('touchstart', function( e ) {
		
	});
	
	div.on('touchend', function( e ) {
		hearts.show();
		e.stopPropagation();
	});
	
	// hide the element after dblclick
	div.on('dblclick', function( e ) {
		
		div.hide('slide', 'fast', function() {
			div.remove();
		});
		
		e.stopPropagation();
	});
	
	// show the avatar here
	
	// start move in with a few vibras
	
	navigator.vibrate([50, 100, 50]);
	
	setTimeout( function() {
		div.show('slide', 'slow');
	}, 1750 );
	
}