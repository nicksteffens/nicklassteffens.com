// JQUERY ACTIONS

$(document).ready(function(){	
	$(".flash-panel").hide();
	$(".video-panel").hide();
	$(".web-panel").hide();
	$(".ala-panel").hide();
	$(".aan-panel").hide();
	$(".ala2-panel").hide();
	$(".history-panel").hide();
	$(".pepsi-panel").hide();
	
	$(".flash-bttn").click(function(){
		$(".flash-panel").slideToggle("fast");
	 });
	
	$(".video-bttn").click(function(){
		$(".video-panel").slideToggle("fast");
	 });
	
	$(".web-bttn").click(function(){
		$(".web-panel").slideToggle("fast");
	});
// --	VIDEO STUFF 	
	$(".aan-bttn").click(function(){
		$(".aan-panel").slideToggle("fast");
	});
	
	$(".ala-bttn").click(function(){
		$(".ala-panel").slideToggle("fast");
	});
	
	$(".ala2-bttn").click(function(){
		$(".ala2-panel").slideToggle("fast");
	});
	
	$(".pepsi-bttn").click(function(){
		$(".pepsi-panel").slideToggle("fast");
	});
	
	$(".history-bttn").click(function(){
		$(".history-panel").slideToggle("fast");
	});
});