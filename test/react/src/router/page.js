import { Component } from 'react';
//引入 react-router 模块，获取 link 组件
import { Link } from 'react-router';

class Home extends Component{
	// 使用 link 代替 a 标签
	render(){
		const query = this.props.location.query;
		return (
			<div>
				Home , 
				<Link to="/about">see about</Link>
				<hr/>
				{ query.text }
			</div>
		);
	}
}

class About extends Component{
	// 使用 link 代替 a 标签
	render(){
		return (
			<h1>
				my svon
				<Link to="/">go Home</Link>
			</h1>
		);
	}
}

class Index extends Component{
	render(){
		let pathdata = {
			pathname : "/index",
			query : {
				text : "hello react-router"
			}
		};
		return (
			<h1>
				<Link to={ pathdata }>see /index</Link>
			</h1>
		);
	}
}

class Test extends Component{
	render(){
		const location = this.props.location;
		console.log(location);
		return (
			<div>pathname : { location.pathname }</div>
		);
	}
}

export { Home , About, Index , Test};