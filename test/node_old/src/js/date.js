define([],function(){
	function getYearStatus(year){
		if((year%4==0 && year%100!=0)||(year%100==0 && year%400==0)){
			return 29;
		}else{
			return 28;
		}
	}
	
	
	return {
		//根据当前月份求当前月的天数
		getSelfMonthDays : function(month){
			var date = new Date(); //当前时间
			var monthArray = [31,getYearStatus(date.getFullYear()),31,30,31,30,31,31,30,31,30,31];
			//当传入的形参为空时，默认取当前月份
			return monthArray[month || this.getSelfMonth()];
		},
		//计算当前时间是第几个月
		getSelfMonth : function(){
			var date = new Date(); //当前时间
			return date.getMonth();
		}
	}
});
