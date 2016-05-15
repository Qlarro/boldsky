$(document).ready(function() {

    /* ======= jQuery form validator ======= */ 
    /* Ref: http://jqueryvalidation.org/documentation/ */   
    $("#contact-form").validate({
		messages: {
		
		    name: {
    			required: 'Please enter your name' //You can customise this message
			},
			email: {
				required: 'Please enter your email' //You can customise this message
			},			
			message: {
				required: 'Please enter your message' //You can customise this message
			}
			
		}
		
	});
	
	
});

	//TODO Move to a JS file...or better yet probably just want to move to angular controller
	var getUrlParameter = function getUrlParameter(sParam) {
		var sPageURL = decodeURIComponent(window.location.search.substring(1)),
			sURLVariables = sPageURL.split('&'),
			sParameterName,
			i;

		for (i = 0; i < sURLVariables.length; i++) {
			sParameterName = sURLVariables[i].split('=');

			if (sParameterName[0] === sParam) {
				return sParameterName[1] === undefined ? true : sParameterName[1];
			}
		}
		};
		
	if (getUrlParameter('fwd') == 'cd'){
		console.log("Found param")
		$("#contactSuccess").removeClass("hidden");
	}


