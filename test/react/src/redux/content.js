import { Component } from 'react';
import { store } from './store';
class Content extends Component{
	constructor(...args) { //构造器
		super(...args); //调用父类的构造器
		//使用 es6 class 去写组件时，对 状态的数据赋值默认值
		this.state = { // 需要有在 构造器里面对 state 重新赋值
			number : 0
		}
		const that = this;
		store.subscribe(() => {
			//输出变化后的数据
			that.setState({
				number : store.getState()
			});
		});
	}
	clickDispatch(){
		store.dispatch({ //需要改变数据，就调用一次 dispatch
			type: 'add'
		});
	}
	render(){
		return (<div><span> { this.state.number } </span>
<button onClick={ this.clickDispatch.bind(this) }>点击</button>
		</div>);
	}
}
export { Content };
