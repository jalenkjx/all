let map = new Map();

var key = {
	"a" : "1"
}
// map 中的键值 可以是对象格式
map.set(key,{
	"b" : 2
});
// map 中的键值 可以是数字
map.set(12312321,{
	"list" : [1,2,3,4]
})

console.log(map);

console.log("--------------------------");

//根据键值获取 value
console.log(map.get(key));

// 判断一个键值是否存在，返回 true / false
console.log(map.has(12312321));

map.delete(key);  //根据键值删除 元素

map.keys();  //获取所有的键值，以数组返回

map.values(); //获取所有的元素值，以数组返回
console.log("--------------------------");
map.forEach(function(item,index){
	console.log(item);
	console.log(index);
});
