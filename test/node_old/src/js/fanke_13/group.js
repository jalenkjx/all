define(["jquery","fanke_13/format","vue"],function($,format,Vue){
	var app;
	function group(url){
		$.get(url,{},function(result){
			if(result.success){
			 	if(app){
			 		for(var key in result){
			 			app[key] = result[key];
			 		}
			 	}else{
			 		app = new Vue({
			 			el : "#group",
			 			data : result
			 		});
			 	}
			 	
			}
		},"json");
	}
	
	return group;
});
