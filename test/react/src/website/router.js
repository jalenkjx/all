import { Component } from "react";
import { 
	Router, //路由组件
	Route,  //路由路径组件
	hashHistory,  //监听地址变化 主要监听 hash 变化
	IndexRoute
} from 'react-router';

import { Layout } from './layout';

import { Index } from './page/index';
import { Class } from './page/class';
import { ClassIndex } from './page/content';

class RouterApp extends Component{
	render(){
		// history 是设置 Router 组件的值，hashHistory 是处理路由的函数
		// Route 是定义一组路由，当路由匹配后展示设置的 component 组件
		return (<Router history={ hashHistory }>
			<Route path="/" component={ Layout }>
				<IndexRoute component={ Index }/>
				<Route path="/class" component={ Class }/>
				<Route path="/class/:id" component={ ClassIndex }/>
			</Route>
		</Router>);
	}
}

export { RouterApp };
