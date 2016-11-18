var arr = ["a","b","c","d","e"];

//
Array.prototype.abc = function(){
	
}
//
//for(var key in arr){
//	console.log(key);
//}
//
//
//arr[0] => a
//
//var obj = { "0" : "a"};
//
//obj["0"] => a
//
//arr["0"] => a

// for of 循环对象的元素值，非下标或者 key(键值)

for(let item of arr){
	console.log(item);
}
