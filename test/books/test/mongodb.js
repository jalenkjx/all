// 导入 mongodb 模块
var mongodb = require("mongodb");

var server_options={
	'auto_reconnect':false,
	//连接池
	poolSize:10
};
var db_options={
	w:-1
};
var mongoserver = new mongodb.Server('127.0.0.1', 27017, server_options );
//进入到数据库
var db=new mongodb.Db('test', mongoserver, db_options);
//打开数据库
db.open(function(err,dbserver){
	if(err){
		// 打开失败
		return false;
	}
	//打开数据库下的一个表
	var foo = dbserver.collection('foo'); 
	
	
	var data = {
		"name" : "奔奔",
		"age" : "20",
		"sex" : "男"
	}
	//添加数据
//	foo.save(data,function(e,result){
//		console.log(result);
//	});
	//添加数据
//	foo.install(data,function(e,result){
//		console.log(result);
//	});

	//使用 install 添加数据时，遇到 id 相同的数据 会出错，save 会执行 update 命令，修改该主键的数据


// ------------- 查询
	// 查询所有
//	foo.find().toArray(function(e,reslut){
//		console.log(reslut);
//	});

	//只查询 name 等于 奔奔 的数据
//	foo.find({
//		"name" : "奔奔"
//	}).toArray(function(e,reslut){
//		console.log(reslut);
//		//关掉数据库
//		db.close();
//	});

//------------  修改
//	var oldwhere = {
//		"name" : "奔奔"
//	};
//	
//	var newData = {
//		"name" : "奔奔",
//		"age" : "21", //修改岁数
//		"sex" : "男"
//	}
	
//	foo.update(oldwhere,newData,function(e,result){
//		db.close();
//		console.log(result);
//	});


// ----------------  删除

//	foo.remove({
//		"name" : "奔奔"
//	},function(e,result){
//		console.log(result);
//		
//		db.close();
//	});
});

