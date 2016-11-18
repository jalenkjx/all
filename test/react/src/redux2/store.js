import { createStore } from 'redux';

// 定义数据的行为，什么情况下触发这个数据
const addAction = { 
	type: 'add' 
};

// 声明数据具体如何变化
function counter(state = { count: 0 }, action = {}) {
  	alert("控制器 改变数据");
  	const count = state.count
  	switch (action.type) {
    	case 'add':
      		return { 
      			count: count + 1 
      		};
    	default:
      		return state;
  	}
}

// 将修数据传递给组件
function mapStateToProps(state) {
	alert("update value 返回新的数据给组件");
	return {
		value: state.count
	}
}

// 改变数据
function mapDispatchToProps(dispatch) {
  	return {
		onIncreaseClick: () => {
			alert("click  组件发生行为");
			return dispatch(addAction);
		}
  	}
}

// 创建一个数据对象
const store = createStore(counter);

export { mapStateToProps, mapDispatchToProps, store };