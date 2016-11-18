
// 变量提示 ： 声明提前，赋值延后

// var 声明的变量作用域为 函数
function fun(){
	if(true){
		var a = 1;
	}
	
	console.log(a);
}

// let 声明的变量作用域为 花括号

function test(){
	if(true){
		let a = 1;
	}
	console.log(a);  // error 
}

// 常量
const PI = 3.14;

console.log(PI);

//PI = 3; //常量不允许修改
