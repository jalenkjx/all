import { Component , cloneElement} from "react";
import { Link } from "react-router";
import { Footer, Header } from './common';

let nav = new Set();

nav.add({
	name : "Home",
	pathname : "/"
});

nav.add({
	name : "分类",
	pathname : "/class"
});

class Layout extends Component{
	render(){
		//判断子元素是否存在，存在即克隆该组件
		//不存在创建一个默认的标签或则展示默认的组件
		const view = cloneElement(this.props.children);
		return (
			<div>
				<Header nav={ [...nav] }/>
				<div id="main">
					{ view }
				</div>
				<Footer/>
			</div>
		);
	}
}

export { Layout };