import {render} from "react-dom";
import {AppComponent} from "./appcomponent";

window.onload=function(){
	let data={
		value:10000,
		onIncreaseClick:function(){
			alert("click");
		}
	}
	render(<AppComponent {...data}>,document.querySelector('#app'))
}
