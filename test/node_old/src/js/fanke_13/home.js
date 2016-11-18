/**
 * 首页
 */
define(["jquery","fanke_13/format","vue"],function($,format,Vue){
	var app;
	// 定义
	// 扩展组件
	var MyComponent = Vue.extend({
		//数据传递
		//使用 v-bind:* 指令指定数据名称，通过名称获取调用组件的实例中的数据
		props: ['list'],
		// 定义组件展示的内容
	  	template: $("#home-template").html()
	});
	// 注册
	// 添加到全局
	Vue.component('home-tpl', MyComponent);
	
	function home(){
		//代码可读性
		$.get('/shoplist/list',{},function(result){
			//判断数据是否可用
			//判断数据返回是否正确
			if(result.success){
				//如果 app 存在
				if(app){
					for(var key in result){
						app[key] = result[key];
					}
				}else{
					//不存在 实例化 一个新的 对象
					app = new Vue({
				 		el : "#home",
				 		data : {
				 			"list" : result.list
				 		}
				 	});
				}
			}
		},"json");
	}
	
	return home;
});
