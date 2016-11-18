define(["jquery"],function(){
	var $loading;
	return {
		show : function(){
			$loading || ($loading = $(".loading"));
			
			$loading.removeClass("hide");
		},
		hide : function(){
			$loading || ($loading = $(".loading"));
			
			$loading.addClass("hide");
		}
	}
});
