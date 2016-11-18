import React from "react";
import { render } from "react-dom";

//解构赋值 取出需要的模块
// * as util 
// 将导入的模块下返回的所有数据以对象的形式 赋值给 util,
import * as Util from "./arr.js";

import { List,List2 } from "./list.js";

//没有文件后缀的情况，webpack 会自动填充后缀
import { Props , Img } from "./props";

import Event from "./Event";

import { State } from "./State";

function test(){
	return "hello react";
}

function onload(){
	var style = { 
		"color" : "red",
		"fontSize" : "24px"
	};
	var text = "12321";
	render(
		<div style={ style }>
			<Event/>
			<hr/>
			<State text= { text }/>
		</div>,
		document.getElementById("example")
	);
	

	//组件的使用，第一个字母必须大写，这是 w3c 规范
//	render(
//		<div style={ style }>
//			{
//				test()
//			} 
//			<List/>
//			<hr/>
//			<List2/>
//			<hr/>
//			<Props text1="hello" text2="props"/>
//			<hr/>
//			<Img>
//				<img src="1.jpg"/>
//				<img src="1.jpg"/>
//			</Img>
//		</div>,
//		document.getElementById("example")
//	);


}

if(window){
	window.onload = onload;
}else{
	setTimeout(onload,0);
}
