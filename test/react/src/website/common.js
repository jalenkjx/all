import { Component,createClass,Children,PropTypes } from 'react';
import { Link } from 'react-router';

const Header = createClass({
	//es6 不接受 直接在里面写对象，只能是方法  
	propTypes : {
		//数据不允许为空
	    nav: PropTypes.array.isRequired
	},
	render: function(){
		return (
			<header>
				{
					this.props.nav.map((item,i)=>{
						let pathdata = {
							pathname : item.pathname
						}
						return (
							<Link key={ `nav-${i}` } to={ pathdata }> 
								{ item.name }
							</Link>
						);
					})
				}
			</header>
		);
	}
});

class Footer extends Component{
	render(){
		return (
			<footer>
				footer
			</footer>
		);
	}
}

export { Footer, Header };

