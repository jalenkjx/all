//var arr = new Array();

let set = new Set();

// 添加一个元素
set.add("a");

set.add("b");

set.add("a");//如果添加的元素存在，将不会加入，并且不会覆盖




//console.log(set);


set.delete("a"); //删除一个元素

//console.log(set);

//使用 foreach  不返回元素下标
set.forEach(function(item){
	//console.log(item);
});

//console.log("---------------------");

set.add("1").add("2").add("3");
//使用 解构赋值，将 set 对象转换为 array
let [...arr] = set;
//console.log(arr);





