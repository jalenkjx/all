import { createClass,PropTypes } from "react";

const State = createClass({
	getInitialState : function() {
		//定义默认数据
		return {
			name: "react.js"
		};
	},
	propTypes : {
		//数据不允许为空
	    text: PropTypes.string.isRequired
	},
	componentWillMount:function(){
		console.log("添加前");
		console.log(this.state.name);
	},
	componentDidMount : function(){
		console.log("添加后");
		this.setState({
			name : "添加后 修改的数据"
		});
	},
	render: function(){
		const state = this.state || {};
		function click(e){
			this.setState({
				name : Math.random()
			});
		}
		return (
			<div>
				{ this.props.text }
				<hr/>
				{ state.name || "" }
				<hr/>
				<div onClick={ click.bind(this) }>
					<button>1</button>
					<button>2</button>
					<button>3</button>
				</div>
			</div>
		)
	}
});

export { State };
