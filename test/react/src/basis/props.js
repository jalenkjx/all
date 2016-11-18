import { createClass,Children,Component } from "react";

// 定义一个类 继承了 react 中的 Component 对象
class Props extends Component{
	//定义一个方法
	// this.props 是一个封装对象
	// 获取在组件上传递的所有属性
//	render(){
//		return ( <h1> 
//		{
//			this.props.text1 + " - " + this.props.text2 
//		}
//		</h1> )
//	}
	render(){
		const props = this.props;
		// Object.keys(this.props)
		// 拿到对象下的所有键值 以数组返回
		return ( <h1> 11111 : 
		{
			//循环 props 下面的所有键值
			Children.map(Object.keys(props),(key)=>{
				//通过键值获取对应的 value
				return props[key];
			})
		}
		</h1> )
	}
}

// 定义一个类 继承了 react 中的 Component 对象
class Img extends Component{
	//定义一个方法
	// this.props 是一个封装对象
	// 获取在组件上传递的所有属性
	
	// this.porps.children : 获取的不是属性上的值
	// this.porps.children 获取的是组件下面的所有子元素
	
	// this.porps.children ：
	//  子元素为空时 是 undefined
	//  子元素是一个时 是 Object
	//  子元素是两个以上时 是 Array
	render(){
		return ( <div>
			{
				//循环 props 下面的所有键值
				Children.map(this.props.children,(item)=>{
					console.log(key);
					return item;
				})
			}
		</div> )
	}
}


export { Props ,Img }
