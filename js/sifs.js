jQuery(document).ready(function($) {
	$('#yes').click(function() {
		$('#main').replaceWith('<h2 id="win">Then drink some damn scotch</h2><p id="post-yes-tweet" ><a  class="addthis_button_twitter" style="cursor:pointer"</a>');
		_gaq.push(['_trackEvent', 'shippers', 'win', 'Scotch Is For Shippers']);	
		var twitter_share = 
		{	
			templates: {
				twitter: 'I shipped code today. Did you? {{url}}'
			}
		};

		addthis.toolbox( '#post-yes-tweet', twitter_share, twitter_share);
		$('#post-yes-tweet .addthis_button_twitter').html('Tell the world you shipped code');

	});
	$('#no').click(function() {
		$('#main').replaceWith('<h2 id="lose">Then get to work so you can drink some damn scotch</h2>');
		_gaq.push(['_trackEvent', 'shippers', 'lose', 'Scotch Is For Shippers']);	
	});

	var docHieght = $(document).height();
	var base = 42;
	var fontSize =  (docHieght -  (docHieght % base )) / base  ;
	if (fontSize == 0)
		fontSize = 22;
	$('body').css('font-size', fontSize); 


	});
