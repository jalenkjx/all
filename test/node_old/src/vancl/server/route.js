// fs [io]
var fs = require("fs");
// path 路径处理
var path = require("path");
//导入 request 模块 http 请求模块插件
var request = require('request');
// node.js 中的 dom 操作
var cheerio = require('cheerio');
function main(app){
	//定义商品列表接口
	app.route('/shoplist/list').get(function(req, res){
//		//返回一个 json 文件
		res.sendFile(path.join(__dirname,"data/list.json"));
	});
	
	//商品详情接口
	app.route("/page/:id").get(function(req,res){
		//获取商品 id
		var id = req.path.replace(/\/page\//i,"");
		//拼接缓存文件地址
		var cachedir = path.join(__dirname,"cache","page_" + id + ".json");
		function getFanke(){
			var query = req.query;
			var param = [];
			for(var key in query){
				param.push(key + "=" + query[key]);
			}
			request.get(
				"http://m.vancl.com/Style/Index/"+id + "?"+param,
				function(error,response,data){
					//加载 dom
					var $ = cheerio.load(data);
					var prdtit = $(".prd-tit");
					var imgs = [];
					$('.swiper-wrapper img').each(function(i,item){
						imgs.push($(item).attr("data-src"));
					});
					var result = {
						"success" : true,
						"data" : {
							"name" : $(".name",prdtit).text(),
							"price" : $(".price",prdtit).text(),
							"imgs" : imgs
						}
					};
					
					res.send(result);
					//将数据 缓存到本地
					fs.writeFile(cachedir, JSON.stringify(result));
			});
		}
		//读取缓存文件
		fs.readFile(
			cachedir, //文件地址
			"utf-8",    //文件格式
			function(error,filedata){
				//如果缓存文件不存在
				if(error){
					getFanke(); //从凡客读取数据
				}else{
					//缓存文件存在，返回文件数据
					res.send(filedata); //返回详情 json 数据
				}
		});
		
	});
	
	//商品专题接口
	app.route("/shop/detail").get(function(req,res){
		//获取 地址栏参数
		var query = req.query;
		//拼接缓存文件地址
		var cachedir = path.join(__dirname,"cache","detail_" + query.id + ".json");
		
		function getFanke(){
			var param = [];
			for(var key in query){
				param.push(key + "=" + query[key]);
			}
			request.get(
				"http://m.vancl.com/topics/detail?"+param,
				function(error,response,data){
					//加载 dom
					var $ = cheerio.load(data);
					var content = $(".others-content");
					var list = [];
					$('dt',content).each(function(i,item){
						var pic = $(".pic",item).attr("href");
						var indexof = pic.indexOf("?");
						if(indexof > 0){
							pic = pic.substr(0,indexof);
						}
						//截取商品 id
						pic = pic.substr(pic.lastIndexOf("/") + 1);
						//拼接本地 node.js 接口路由地址
						pic = "/page/" + pic + "?guid=e220be8f85f34540968fea080bd353f4";
						list.push({
							"src" : $("img",item).attr("data-src"),
							"name" : $(".text",item).text(),
							"price" : $(".price",item).text(),
							"link" : pic
						});
					});
					var result = {
						"success" : true,
						"data" : list
					};
					res.send(result);
					//将数据 缓存到本地
					fs.writeFile(cachedir, JSON.stringify(result));
			});
		}
		//读取缓存文件
		fs.readFile(
			cachedir, //文件地址
			"utf-8",    //文件格式
			function(error,filedata){
				//如果缓存文件不存在
				if(error){
					getFanke(); //从凡客读取数据
				}else{
					//缓存文件存在，返回文件数据
					res.send(filedata); //返回详情 json 数据
				}
		});
		
	});
	
}

module.exports = main;
