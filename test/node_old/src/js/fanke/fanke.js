define(["jquery"],function($){
	return {
		"shoplist" : function(callback){
			$.get("/shoplist/list",{},function(result){
				//调用回调函数，将 ajax 请求的数据传送过去
				callback(result);
				//console.log(result);
			},"json");
		}
	}
});
