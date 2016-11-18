define([],function(){
	function format(html,data){
    	return html.replace(/{{([\w]+)}}/ig,function(value,key){
    		return data[key] || value;
    	});
    }
	return format;
});
