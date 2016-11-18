import { createClass, PropTypes } from 'react';

// React createClass
const AppComponent = createClass ({
	//设置 props 数据类型
	propTypes : {
		value: PropTypes.number.isRequired,
		onIncreaseClick: PropTypes.func.isRequired
	},
	render : function() {
		//接收传递过来的数据
		const { 
			value, //展示的数据
			onIncreaseClick  //action 触发的函数
		} = this.props;
		return (
			<div>
				<span>{ value }</span>
				<hr/>
				<button onClick={ onIncreaseClick }> Click </button>
			</div>
		);
	}
});

export { AppComponent };