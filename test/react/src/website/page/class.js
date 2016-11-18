import { Component,createClass,Children } from 'react';

const list = {
	"java" : [],
	"javascript" : [],
	"c#" : [],
	"c" : [],
	"html" : []
};

class List extends Component{
	render(){
		const list = this.props.list;
		return <ul>
			{
				Children.map(Object.keys(list),(key,i)=>{
					return <li key={ `list-${i}` }>{ key }</li>;
				})
			}
		</ul>
	}
}

const Class = createClass({
	getInitialState :function() {
		//定义默认数据
		return {
			list: null
		};
	},
	//添加后
	componentDidMount: function(){
		//当元素添加到 页面后，执行
		this.setState({
			list : list
		});
	},
	render : function(){
		if(this.state.list){
			return (
				<List list={ this.state.list } />
			);
		}else{
			return (
				<p> loading.... </p>
			);
		}
		
	}
});

export { Class };