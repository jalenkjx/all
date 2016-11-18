define(["jquery","fanke/format","swiper","fanke/loading"],function($,format,Swiper,loading){
	function page(url){
		$.get(url,{},function(result){
			//先判断数据是否用
			if(result.success){
				var data = result.data;
				
				var html = '<div class="swiper-container">'+
        		'<div class="swiper-wrapper">';
            
	            data.imgs.forEach(function(item,i){
	            	//动态创建图片元素，图片的src 地址存的书 对象中的下标
	            	html += '<div class="swiper-slide"><img src="{{'+ i +'}}" alt=""></div>';
	            });
	         	html += '</div>'+
	        		'<div class="swiper-pagination"></div>'+
	    		'</div>';
	    		//商品名称
	    		//商品价格
	    		html += '<div style="font-size:0.32rem;">'+
	    			'<p>{{name}}</p><p>{{price}}</p>'+
	    			'</div>';
	    		
	    		
	    		//根据下标获取图片的地址
	    		html = format(html,data.imgs);
	    		html = format(html,data);
	    		
	    		//dom 操作
	    		$("#section").html(html);
	    		//延迟队列，保证前面的代码执行完毕
	    		setTimeout(function(){
	    			new Swiper($('.swiper-container',"#section").get(0), {
				        pagination: '.swiper-pagination',
				        nextButton: '.swiper-button-next',
				        prevButton: '.swiper-button-prev',
				        paginationClickable: true,
				        spaceBetween: 30,
				        centeredSlides: true,
				        autoplayDisableOnInteraction: false
				   });
				   
				   setTimeout(function(){
				   	 loading.hide();
				   },3000);
	    		},0);
			}
		},"json");
	}
	
	return page;
});
