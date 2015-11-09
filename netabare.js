<!-- netabare.js -->
<script type="text/javascript">
$(document).ready(function(){
    var iconObj = $('<i class="blogicon-warning"></i>');
    $(".netabarebtn").prepend(iconObj);
	$(".netabaretxt").hide();
	var netabareflg = "close";
	$(".netabarebtn").click(function(){
		$(".netabaretxt").slideToggle();
		if(netabareflg == "close"){
			$(this).text("ネタバレを隠す！").prepend(iconObj);
		netabareflg = "open";
		}else{
			$(this).text("ネタバレを読む！").prepend(iconObj);
			netabareflg = "close";
		}
	});
});
</script>
<!--// netabare.js -->
