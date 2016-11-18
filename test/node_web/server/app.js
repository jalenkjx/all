//导入 express 模块
const express = require("express");
//实例化 express
const app = express();
//系统模块 路径模块
const path = require("path");
//引入 swig 模块
const Swig = require('swig');
Swig.setDefaults({
	cache : false //不缓存文件
});

//声明 get 请求，路由是 /
app.get("/",function(req,res){
//	res.send(); // 输出 json 或者 字符串
	res.render("index");   // render 加载一个文件 并输出到浏览器
});

// 设置文件后缀的解释器  配置 render 输出的文件的解释，编译模块
app.engine('html', Swig.renderFile);
//设置 页面的后缀  配置 render 输出文件的默认后缀
app.set('view engine', 'html');
//设置 页面的 跟目录  配置 render 输出文件的 根目录
app.set("views",path.join(__dirname,"../views"));

// __dirname 系统变量，当前文件路径 （两个下划线）
//把一个目录当做一个静态文件服务的根目录
//访问的路由是 配置的的路由地址开头的都能访问
//拼接目录地址
app.use("/static",express.static(path.join(__dirname,"../static")));



//监听本机端口号，运行服务
const server = app.listen(3000,function(){
	let host = server.address().address;
  	let port = server.address().port;
  	
	console.log("http:%s:%s",host,port);
});
