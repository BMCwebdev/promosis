$(function() {
	
var popup = false;

$(".showlink").click(function(){
	if(popup == false){
		$("#overlayEffect").fadeIn("slow");
		$(this).next('.popup').each(function() {
			$(this).fadeIn("slow");
			$(".close").fadeIn("slow");
			});
	    center();
		popup = true;
	}	
	});
	
	$(".close").click(function(){
		hidePopup();
	});
	
	$("#overlayEffect").click(function(){
		hidePopup();
	});

	
function center(){
	var windowWidth = document.documentElement.clientWidth;
	var windowHeight = document.documentElement.clientHeight;
	var popupHeight = $(".popup").height();
	var popupWidth = $(".popup").width();
	$(".popup").css({
		"position": "fixed",
		"top": windowHeight/2-popupHeight/2,
		"left": windowWidth/2-popupWidth/2
	});
	
	}
function hidePopup(){
	if(popup==true){
		$("#overlayEffect").fadeOut("slow");
		$(".popup").fadeOut("slow");
		$(".close").fadeOut("slow");
		popup = false;
	}
}

} ,jQuery);


