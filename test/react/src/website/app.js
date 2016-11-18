import { render } from "react-dom";

import { RouterApp } from "./router";

//让页面 onload 后执行
window.addEventListener('load',function(){
	render(
		<RouterApp/>,
		//不要写 body
		document.querySelector("#app")
	);
});
