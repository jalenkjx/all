import { createClass,Children } from "react";

let set = new Set();

set.add("java");
set.add("c#");
set.add("javascript");
set.add("react");

const List = createClass({
	render:function(){
		let [...list] = set;
		return ( 
			<ul>
				{
					list.map((item,i)=>{
					// key 是 react 识别元素 的 id
					// 每一个元素都有一个 key 值，
					// 这里循环的元素 react 无法动态的给元素一个 id
					// 所以我们需要手动给一个 id
						return <li key={`li-${i}`}>
							{ item }
						</li>;
					})
				}
			</ul>
		);
	}
});

const List2 = createClass({
	render:function(){
		return ( 
			<ul>
				{
					Children.map(set,(item,i)=>{
					// key 是 react 识别元素 的 id
					// 每一个元素都有一个 key 值，
					// 这里循环的元素 react 无法动态的给元素一个 id
					// 所以我们需要手动给一个 id
						return <li key={`li-${i}`}>
							{ item }
						</li>;
					})
				}
			</ul>
		);
	}
});

export { List , List2};
//modules.exports = list