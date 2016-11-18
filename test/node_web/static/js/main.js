require(["$","hash","game"],function($,hash,game){
	+function(){
		$(".door .m").on("tap",function(e){
			//开门
			$(".home").addClass("animation");
		});
		
		game();
	}();
	
//		//捕捉webkitAnimationEnd事件
//		$(document).on('webkitAnimationEnd', end);
//		//捕捉webkitTransitionEnd事件
//		$(document).on('webkitTransitionEnd', end);

	hash.addroute(/^\/$|^$/,function(url){
		$(".session").not(".home").addClass("hide");
		$(".session.home").removeClass("hide");
	});
	
	hash.addroute(/^\/step/,function(url){
		$(".session").not(".step").addClass("hide");
		$(".session.step").removeClass("hide");
	});
	
	hash.addroute(/^\/game/,function(){
		$(".session").not(".game").addClass("hide");
		$(".session.game").removeClass("hide");
	});
	hash.refresh();
});