import { createClass, PropTypes } from 'react';

// React createClass
const AppComponent = createClass ({
	//设置 props 数据类型
	propTypes : {
		value: PropTypes.number.isRequired,
		onIncreaseClick: PropTypes.func.isRequired
	},
	render : function() {
		const { value, onIncreaseClick } = this.props;
		return (
			<div>
				<span>{ value }</span>
				<button onClick={ onIncreaseClick }> Click </button>
			</div>
		);
	}
});

export { AppComponent };
