/**
 * 首页
 */
define(["jquery","fanke/format","vue"],function($,format,Vue){
	//首页模板
	var tpl = '<li>'+
		//数据值 填写为 对象中的 key (键值)
		'<a href="#{{link}}">'+
			'<img src="{{src}}"/>'+
		'</a>'+
	'</li>';
	function home(){
		/*var html = '<div class="warning">'+
	 		'<a>'+
	 			'<img src="http://i4.m.vancl.com/wap/2016_9_13_11_22_35_4479_640x80.jpg">'+
	 		'</a> '+
	 	'</div>'+
	 	'<figure>'+
	 		'<figcaption>'+
	 			'<img src="http://i5.m.vancl.com/wap/2016_9_12_10_40_41_5537_640x80.jpg" alt="" />'+
	 		'</figcaption>'+
	 		'<div class="list">'+
	 			'<ul>';*/
	 	var app;
	 	
		//代码可读性
		$.get('/shoplist/list',{},function(result){
			/*//判断数据是否可用
			//判断数据返回是否正确
			if(result.success){
				//forEach es5 新语法
				//Array.indexOf
				//Array.map
				// var a = new Array(100);
				// forEach , map 循环的时候会判断元素是否是空的，空的情况下会过滤掉
				
				result.list.forEach(function(item,i){
					html += format(tpl,item);
				});
				
				html += '</ul>'+
			 		'</div>'+
			 	'</figure>';
			 	
			 	$("#section").html(html);
			}*/
			if(result.app)
		},"json");
		
	}
	
	return home;
});
