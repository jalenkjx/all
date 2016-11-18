define(["jquery"],function($){
	return {
		//商品专题
		getdetail : function(url,callback){
			console.log("getdetail : ",url);
			//根据传递过来的 url 地址做 ajax 请求
			$.get(url,{},callback,"json");
		},
		//商品详情
		getpage : function(url,callback){
			//console.log("getpage : ",url);
			//根据传递过来的 url 地址做 ajax 请求
			$.get(url,{},callback,"json");
		}
	}
});
