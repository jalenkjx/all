define(["jquery","fanke/format"],function($,format){
	//专题模板
	var tpl = '<li>'+
		//数据值 填写为 对象中的 key (键值)
		'<a href="#{{link}}">'+ //商品链接
			'<img src="{{src}}"/>'+ //商品图片
			'<p>{{name}}</p>'+  //商品名字
			'<p>{{price}}</p>'+ //商品价格
		'</a>'+
	'</li>';
	function group(url){
		var html = '<figure>'+
	 		'<figcaption>'+
	 			'<img src="http://i5.m.vancl.com/wap/2016_9_12_10_40_41_5537_640x80.jpg" alt="" />'+
	 		'</figcaption>'+
	 		'<div class="list">'+
	 			'<ul>';
		$.get(url,{},function(result){
			if(result.success){
				result.data.map(function(item,i){
					html += format(tpl,item);
					return item;
				});
				
				html += '</ul>'+
			 		'</div>'+
			 	'</figure>';
			 	
			 	$("#section").html(html);
			 	
			}
		},"json");
	}
	
	return group;
});
