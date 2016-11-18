require.config({
	//指定静态文件跟目录
	baseUrl : "/static/js/",
	//别名
	//给一个模块定义别名
	paths : {
		"jquery" : "zepto.min",
		//会在  baseUrl 下面去查找
		"$" : "zepto.min"
	},
	//兼容   把非模块化的js文件模块化
	//把不是以 define 格式的 js 做兼容处理
	shim:{
		"$":{
			deps:[], //循环依赖，先不管
			//返回 jquery 暴露的全局对象
			exports:"window.Zepto"
		},
		"jquery":{
			deps:[], //循环依赖，先不管
			//返回 jquery 暴露的全局对象
			exports:"window.Zepto"
		}
	}
});
