// 解构赋值

let arr = ["1","2","3"];

// 根据数组元素的下标对应赋值
let [a,b,c] = arr;

console.log(a,b,c);

function sum([a,b,c,d]){
	return a + b + c + d;
}


var number = sum([1,2,3,4]);

console.log(number);

//把第一个元素赋值给 first 变量，后面剩余的所有元素 组合为数组赋值给 第二个变量
var [first,...arr2] = arr;

console.log(first, arr2 );

var obj = {
	"key1" : "123",
	"key2" : "345",
	"key3" : "567"
}

var {key1,key2,key3} = obj;

console.log(key1);
console.log(key2);
console.log(key3);

var reslut = {
	"success" : true,
	"data" : [1,2,3]
};

var {data} = reslut;
