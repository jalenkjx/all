import { Component } from "react";

export default class Event extends Component{
	clicktest(e){
		//通过定义的的 ref ，找到真实 dom
		console.log(this.refs.div1);
	}
	render(){
		// this.clicktest.bind(this)
		// babel 在转换 es6 class 的时候会丢失 this 对象
		// 我们使用 bind 强制转换这个函数的对象，转换为当前组件对象，以这样的形式找回 this 指向
		return (
			<div ref="div1">
				<h1 onClick={ this.clicktest.bind(this) } >  事件 , 点我试试</h1>
			</div>
		)
	}
}
