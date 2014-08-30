window.onload = function() {
	
	window.stage = 0;
	
	window.backgrounds = ['images/pedometer.png', 'images/pedometer.png', 'images/grumpy.png'];
	
	$('body').on('click', function() {
		if( window.stage == 0 ) {
			character('images/avatar_fat.gif', "Let's go jogging!");
			return;
		}
		
		if( window.stage == 1 ) {
			character('images/avatar_default_sad.gif', "Speed up my friend!");
			return;	
		}
		
		if ( window.stage == 2 ) {
			character('images/avatar_joy.gif', "Goal reached");
			return;
		}
		
		character('images/avatar_default_sad.gif', "The demo has ended");
		stage--;
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

function character(  img, text ) {
	
	$('.sam').remove();
	
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
		
		var span = $('<span>', { html: text, 'class': 'btn' } );
		// span.css('background', 'black');
		span.css('padding', 20 );
		
		
		span.click( function( e ) {	
			
			div.hide();
			
			$('body').css('background', 'url("' + backgrounds[ stage++ ] + '")');
			$('body').css('background-size', '100%');
			
			e.stopPropagation();
		} );
		
		
		div.append( '<br/>' );
		div.append( span );
	
	};
	
	// show element
	div.hide();
	$('body').prepend( div );
	
	/*
	 div.on('touchstart', function( e ) {
		
		// let's purr
		navigator.vibrate([50, 75, 50]);
		
	});
	
	div.on('touchend', function( e ) {
		hearts.show();
		e.stopPropagation();
	});
	*/
	
	// hide the element after dblclick
	div.on('dblclick', function( e ) {
		
		div.hide();
		
		e.stopPropagation();
	});
	
	// show the avatar here
	
	// start move in with a few vibras
	
	navigator.vibrate([50, 75, 100]);
	
	setTimeout( function() {
		div.show('slide', 'slow');
	}, 1750 );
	
}