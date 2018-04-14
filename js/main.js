$(".main").mouseenter(function(){
	$(".cubik1").css("visibility", "visible");
});
$(".cub").mouseenter(function(){
	$(".cubik2").css("visibility", "visible");
});
$(".main").mouseleave(function(){
	$(".cubik1").animate({bottom: "0"}, 1000);
	$(".cubik2").animate({left: "0"}, 1000);
});
$(".main").mouseleave(function() {
	$(".cubik1").addClass("loader");
	$(".cubik2").addClass("loader");
});