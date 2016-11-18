import mongodb from "mongodb";

const mongoserver = new mongodb.Server('127.0.0.1', 27017, {
	//数据库连接失败时自动重连
	"auto_reconnect" : true,
	//设置连接池数量
	"poolSize" : 10
});

const db=new mongodb.Db('test', mongoserver, {
	// 关注写
	// 设置 w = -1 是 mongodb 1.2 后的强制要求
	w : -1
});

function mongo(){
	return new Promise(function(resolve,reject){
		db.open(function(err){
			if(err){
				reject(err);
			}
			// collection : 需要链接的库
			resolve(db);
		});
	});
}

export { mongo };